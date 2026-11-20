import fs from 'node:fs';
import path from 'node:path';
import { blogs, featuredBlog } from './src/data/blogs';

async function prerender() {
  const distDir = path.resolve(process.cwd(), 'dist');
  const templatePath = path.resolve(distDir, 'index.html');

  if (!fs.existsSync(templatePath)) {
    console.error('dist/index.html does not exist. Run vite build first.');
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, 'utf-8');
  const serverBundlePath = path.resolve(distDir, 'server/entry-server.js');
  const { render } = await import(serverBundlePath);

  // Collect all routes to prerender
  const routes = [
    '/',
    '/contact',
    '/insights',
    '/blog',
  ];

  // Add all blog slugs
  const allBlogs = [featuredBlog, ...blogs];
  for (const post of allBlogs) {
    if (post && post.slug) {
      routes.push(`/insights/${post.slug}`);
      routes.push(`/blog/${post.slug}`);
    }
  }

  console.log(`Prerendering ${routes.length} routes...`);

  for (const url of routes) {
    try {
      const appHtml = render(url);
      const html = template.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      );

      let targetPath: string;
      if (url === '/') {
        targetPath = path.resolve(distDir, 'index.html');
      } else {
        const routeDir = path.resolve(distDir, url.replace(/^\//, ''));
        fs.mkdirSync(routeDir, { recursive: true });
        targetPath = path.resolve(routeDir, 'index.html');
      }

      fs.writeFileSync(targetPath, html, 'utf-8');
      console.log(`  ✓ Prerendered ${url} -> ${path.relative(process.cwd(), targetPath)}`);
    } catch (err) {
      console.error(`  ✗ Error prerendering ${url}:`, err);
    }
  }

  // Prerender custom 404 page
  try {
    const notFoundAppHtml = render('/404');
    const notFoundHtml = template
      .replace('<div id="root"></div>', `<div id="root">${notFoundAppHtml}</div>`)
      .replace(/<title>[\s\S]*?<\/title>/i, '<title>Page Not Found (404) | HealthMed</title>')
      .replace(/content="index,\s*follow"/i, 'content="noindex, follow"');
    const notFoundPath = path.resolve(distDir, '404.html');
    fs.writeFileSync(notFoundPath, notFoundHtml, 'utf-8');
    console.log(`  ✓ Prerendered /404 -> ${path.relative(process.cwd(), notFoundPath)}`);
  } catch (err) {
    console.error('  ✗ Error prerendering /404:', err);
  }

  console.log('Prerendering complete!');
}

prerender();
