import fs from 'node:fs';
import path from 'node:path';
import express from 'express';

const isProduction = process.env.NODE_ENV === 'production';
const PORT = 3000;
const app = express();

async function createServer() {
  let vite: any = null;

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom'
    });
    app.use(vite.middlewares);
  } else {
    const clientDistPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(clientDistPath, { index: false }));
  }

  // Health check API route
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', ssr: true });
  });

  // Serve SSR-rendered pages for all incoming GET routes
  app.get('*', async (req, res, next) => {
    const url = req.originalUrl;

    // Ignore asset/api requests that weren't resolved by static middleware
    if (url.startsWith('/api/') || url.match(/\.(png|jpg|jpeg|gif|svg|ico|webp|mp4|webm|css|js|map|json|txt|xml)$/)) {
      return next();
    }

    try {
      let template: string;
      let render: (url: string) => string;
      let isValidRoute: ((url: string) => boolean) | undefined;

      if (!isProduction) {
        // In development: read index.html from root, apply Vite HTML transforms, and load entry-server module
        const indexPath = path.resolve(process.cwd(), 'index.html');
        template = fs.readFileSync(indexPath, 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        const serverModule = await vite.ssrLoadModule('/src/entry-server.tsx');
        render = serverModule.render;
        isValidRoute = serverModule.isValidRoute;
      } else {
        // In production: read built index.html from dist and load compiled SSR bundle
        const indexPath = path.resolve(process.cwd(), 'dist/index.html');
        template = fs.readFileSync(indexPath, 'utf-8');
        const serverBundlePath = path.resolve(process.cwd(), 'dist/server/entry-server.js');
        const serverModule = await import(serverBundlePath);
        render = serverModule.render;
        isValidRoute = serverModule.isValidRoute;
      }

      const valid = isValidRoute ? isValidRoute(url) : true;
      const statusCode = valid ? 200 : 404;
      const appHtml = render(url);

      // Inject rendered HTML into root container
      let html = template.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      );

      if (!valid) {
        html = html
          .replace(/<title>[\s\S]*?<\/title>/i, '<title>Page Not Found (404) | HealthMed</title>')
          .replace(/content="index,\s*follow"/i, 'content="noindex, follow"');
      }

      res.status(statusCode).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e: any) {
      if (!isProduction && vite) {
        vite.ssrFixStacktrace(e);
      }
      console.error('SSR render error for url', url, ':', e);
      res.status(500).end(e.stack || e.message);
    }
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT} [mode: ${isProduction ? 'production' : 'development'}]`);
  });
}

createServer();
