import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Play } from 'lucide-react';

interface VideoTeamMember {
  id: number;
  name: string;
  role: string;
  thumbnail: string;
  videoUrl: string;
}

export const VideoTestimonials: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const [thumbnailSources, setThumbnailSources] = useState<{ [key: number]: string }>({
    1: '/images/testimonials/sarah-mitchell.jpg',
    2: '/images/testimonials/michael-rodriguez.jpg',
    3: '/images/testimonials/emily-chen.jpg',
  });

  const [videoSources, setVideoSources] = useState<{ [key: number]: string }>({
    1: '/videos/doctor-consultation.mp4',
    2: '/videos/hospital-dashboard.mp4',
    3: '/videos/laboratory-work.mp4',
  });

  const fallbackThumbnails: { [key: number]: string } = {
    1: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    2: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    3: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  };

  const fallbackVideos: { [key: number]: string } = {
    1: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c0/Big_Buck_Bunny_4K.webm/Big_Buck_Bunny_4K.webm.480p.vp9.webm',
    2: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f1/Sintel_movie_4K.webm/Sintel_movie_4K.webm.480p.vp9.webm',
    3: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/8/88/Tears_of_Steel_in_4k_Teaser.webm/Tears_of_Steel_in_4k_Teaser.webm.480p.vp9.webm',
  };

  const handleThumbnailError = (id: number) => {
    if (thumbnailSources[id] !== fallbackThumbnails[id]) {
      setThumbnailSources((prev) => ({
        ...prev,
        [id]: fallbackThumbnails[id],
      }));
    }
  };

  const handleVideoError = (id: number) => {
    if (videoSources[id] !== fallbackVideos[id]) {
      setVideoSources((prev) => ({
        ...prev,
        [id]: fallbackVideos[id],
      }));
    }
  };

  const teamVideos: VideoTeamMember[] = [
    {
      id: 1,
      name: 'Dr. Sarah Mitchell',
      role: 'Chief Medical Officer',
      thumbnail: thumbnailSources[1],
      videoUrl: videoSources[1],
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'Hospital Operations Director',
      thumbnail: thumbnailSources[2],
      videoUrl: videoSources[2],
    },
    {
      id: 3,
      name: 'Emily Chen',
      role: 'Clinical Laboratory Manager',
      thumbnail: thumbnailSources[3],
      videoUrl: videoSources[3],
    },
  ];

  // Silky smooth playback triggers on Hover
  const handleMouseEnter = (id: number) => {
    setHoveredId(id);
    const videoEl = videoRefs.current[id];
    if (videoEl) {
      videoEl.muted = isMuted;
      // Start playing with absolute smoothness
      const playPromise = videoEl.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log('Hover autoplay auto-handled:', err);
        });
      }
    }
  };

  const handleMouseLeave = (id: number) => {
    setHoveredId(null);
    const videoEl = videoRefs.current[id];
    if (videoEl) {
      videoEl.pause();
      // Instantly rewind to beginning so it restarts cleanly next time
      videoEl.currentTime = 0;
    }
  };

  const handleCardClick = (id: number) => {
    if (hoveredId === id) {
      const videoEl = videoRefs.current[id];
      if (videoEl && !videoEl.paused) {
        videoEl.pause();
        setHoveredId(null);
      } else if (videoEl) {
        videoEl.play().catch(() => {});
      }
    } else {
      handleMouseEnter(id);
    }
  };

  // Mute toggle function
  const toggleMute = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);

    // Apply to all pre-rendered video refs
    Object.keys(videoRefs.current).forEach((key) => {
      const videoEl = videoRefs.current[Number(key)];
      if (videoEl) {
        videoEl.muted = nextMuted;
      }
    });
  };

  return (
    <section
      className="bg-[var(--color-surface-secondary)] py-[var(--spacing-5xl)] lg:py-[var(--spacing-6xl)] px-[var(--space-lg)] lg:px-[var(--space-xl)] border-b border-[var(--color-border-subtle)] relative"
      id="video-testimonials"
    >
      <div className="max-w-[var(--container-xl)] mx-auto">
        {/* Section Header */}
        <div
          className="text-center max-w-[800px] mx-auto mb-[var(--spacing-4xl)]"
          id="video-testimonials-header"
        >
          <h2
            className="text-[var(--color-brand-charcoal)] mb-[var(--space-md-lg)] brand-text-6xl md:brand-text-7xl"
            id="video-testimonials-title"
          >
            Trusted by Healthcare Teams That Deliver Better Care
          </h2>
          <p
            className="text-[var(--color-brand-gray-600)] brand-text-2xl"
            id="video-testimonials-subtitle"
          >
            Hear directly from hospital administrators, doctors, laboratory teams, and operations leaders who
            transformed their daily workflows with Healthmed HMIS.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-xl)] md:gap-[var(--spacing-grid-gap-sm)] lg:gap-[var(--spacing-grid-gap-lg)]"
          id="video-testimonials-grid"
        >
          {teamVideos.map((member) => {
            const isHovered = hoveredId === member.id;

            return (
              <div
                key={member.id}
                className="group relative h-[var(--size-card-height-lg)] rounded-[var(--radius-lg)] overflow-hidden bg-[var(--color-surface-tertiary)] shadow-[var(--shadow-card)] cursor-pointer transition-all duration-[var(--transition-duration-slow)] ease-[var(--transition-bezier-smooth)] hover:shadow-[var(--shadow-card-hover)]"
                onMouseEnter={() => handleMouseEnter(member.id)}
                onMouseLeave={() => handleMouseLeave(member.id)}
                onClick={() => handleCardClick(member.id)}
                id={`video-testimonial-card-${member.id}`}
              >
                {/* Card Background / Thumbnail Image */}
                <img
                  src={member.thumbnail}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-[var(--transition-duration-zoom)] ease-[var(--transition-bezier-smooth)] group-hover:scale-[1.04]"
                  id={`video-card-thumbnail-${member.id}`}
                  referrerPolicy="no-referrer"
                  onError={() => handleThumbnailError(member.id)}
                />

                {/* Always-mounted Video element for instantaneous playback without loading delays */}
                <video
                  ref={(el) => {
                    videoRefs.current[member.id] = el;
                  }}
                  src={member.videoUrl}
                  className={`absolute inset-0 w-full h-full object-cover z-12 transition-opacity duration-[var(--transition-duration-extra-slow)] ease-[var(--transition-bezier-smooth)] ${
                    isHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                  }`}
                  playsInline
                  loop
                  muted={isMuted}
                  controls={false}
                  preload="auto"
                  onError={() => handleVideoError(member.id)}
                  id={`video-player-element-${member.id}`}
                />

                {/* Micro unmute controller during hover playback */}
                {isHovered && (
                  <button
                    className="absolute top-[var(--space-md)] right-[var(--space-md)] z-25 w-[var(--size-control-sm)] h-[var(--size-control-sm)] rounded-[var(--radius-full)] bg-[var(--color-bg-dark-glass)] backdrop-blur-[6px] flex items-center justify-center border-none cursor-pointer transition-all duration-[var(--transition-duration-default)] hover:bg-[var(--color-brand-blue-accent)] hover:scale-110"
                    onClick={(e) => toggleMute(e, member.id)}
                    aria-label={isMuted ? 'Unmute sound' : 'Mute sound'}
                    id={`video-hover-mute-toggle-${member.id}`}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-white" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-white" />
                    )}
                  </button>
                )}

                {/* Centered Play Button overlay (visible when not hovered, or gently scaling) */}
                <div
                  className={`absolute inset-0 flex items-center justify-center z-10 pointer-events-none transition-all duration-[var(--transition-duration-extra-slow)] ease-[var(--transition-bezier-smooth)] ${
                    isHovered ? 'opacity-0 scale-75' : ''
                  }`}
                  id={`play-trigger-${member.id}`}
                >
                  <div className="w-[56px] h-[44px] bg-[rgba(55,70,82,0.75)] backdrop-blur-[8px] rounded-[12px] flex items-center justify-center transition-all duration-[var(--transition-duration-medium)] ease-out pointer-events-auto shadow-[0_4px_16px_rgba(0,0,0,0.2)] border border-white/12 group-hover:scale-[1.08] group-hover:bg-[rgba(0,85,255,0.85)]">
                    <Play className="w-5 h-5 text-white fill-white ml-[2px]" />
                  </div>
                </div>

                {/* Premium Frosted Glass Text Overlay (Figma inspired) */}
                <div
                  className="absolute bottom-0 inset-x-0 px-6 py-4  bg-[rgba(141,141,141,0.4)]  backdrop-blur-[30px] flex flex-col justify-end z-15 transition-all duration-[var(--transition-duration-extra-slow)] ease-out"
                  id={`card-frosted-overlay-${member.id}`}
                >
                  <h3
                    className="text-white brand-text-3xl-medium"
                    id={`member-name-${member.id}`}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-brand-gray-200 brand-text-xl"
                    id={`member-role-${member.id}`}
                  >
                    {member.role}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
