/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Volume2, VolumeX } from 'lucide-react';
import './VideoTestimonials.css';

interface VideoTeamMember {
  id: number;
  name: string;
  role: string;
  thumbnail: string;
  videoUrl: string;
}

export default function VideoTestimonials() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
  const [videoSources, setVideoSources] = useState<{ [key: number]: string }>({
    1: 'https://assets.mixkit.co/videos/preview/mixkit-female-doctor-welcoming-a-patient-at-her-office-40340-large.mp4',
    2: 'https://assets.mixkit.co/videos/preview/mixkit-doctor-explaining-something-on-a-tablet-40341-large.mp4',
    3: 'https://assets.mixkit.co/videos/preview/mixkit-medical-professional-working-in-a-lab-40337-large.mp4'
  });

  // To match the exact UI in the reference mockup:
  // - All 3 cards feature the same female doctor on a bright teal/blue background.
  // - All 3 cards are labeled "Alex Bean" / "Hospital Administrator".
  // - The 3rd card has a white circular sticker with a red gear/cog symbol over her head.
  const teamVideos: VideoTeamMember[] = [
    {
      id: 1,
      name: 'Alex Bean',
      role: 'Hospital Administrator',
      thumbnail: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600&h=750&fm=webp',
      videoUrl: videoSources[1],
    },
    {
      id: 2,
      name: 'Alex Bean',
      role: 'Hospital Administrator',
      thumbnail: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600&h=750&fm=webp',
      videoUrl: videoSources[2],
    },
    {
      id: 3,
      name: 'Alex Bean',
      role: 'Hospital Administrator',
      thumbnail: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600&h=750&fm=webp',
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

  // Fallback handler if primary video source fails to load
  const handleVideoError = (id: number) => {
    console.warn(`Video ${id} failed to load. Initiating fast Google CDN fallback.`);
    const fallbackUrls = [
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
    ];
    setVideoSources(prev => ({
      ...prev,
      [id]: fallbackUrls[id - 1] || fallbackUrls[0]
    }));
  };

  return (
    <section className="video-testimonials-section" id="video-testimonials">
      <div className="video-testimonials-container">
        
        {/* Section Header */}
        <div className="video-testimonials-header" id="video-testimonials-header">
          <h2 className="video-testimonials-title text-6xl md:text-7xl" id="video-testimonials-title">
            Trusted by Healthcare Teams That Deliver Better Care
          </h2>
          <p className="video-testimonials-subtitle text-2xl" id="video-testimonials-subtitle">
            Hear directly from hospital administrators, doctors, laboratory teams, and operations leaders who
            transformed their daily workflows with Healthmed HMIS.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="video-testimonials-grid" id="video-testimonials-grid">
          {teamVideos.map((member) => {
            const isHovered = hoveredId === member.id;

            return (
              <div
                key={member.id}
                className={`video-testimonial-card ${isHovered ? 'is-playing' : ''}`}
                onMouseEnter={() => handleMouseEnter(member.id)}
                onMouseLeave={() => handleMouseLeave(member.id)}
                id={`video-testimonial-card-${member.id}`}
              >
                {/* Card Background / Thumbnail Image */}
                <img
                  src={member.thumbnail}
                  alt={member.name}
                  className="video-card-thumbnail"
                  id={`video-card-thumbnail-${member.id}`}
                  referrerPolicy="no-referrer"
                />

                {/* Always-mounted Video element for instantaneous playback without loading delays */}
                <video
                  ref={(el) => {
                    videoRefs.current[member.id] = el;
                  }}
                  src={member.videoUrl}
                  className={`video-player-element-hover ${isHovered ? 'visible' : ''}`}
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
                    className="video-hover-mute-toggle"
                    onClick={(e) => toggleMute(e, member.id)}
                    aria-label={isMuted ? "Unmute sound" : "Mute sound"}
                    id={`video-hover-mute-toggle-${member.id}`}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-white" />}
                  </button>
                )}

                {/* Centered Play Button overlay (visible when not hovered, or gently scaling) */}
                <div className={`video-play-trigger ${isHovered ? 'hovered' : ''}`} id={`play-trigger-${member.id}`}>
                  <div className="video-play-circle">
                    <Play className="video-play-icon" />
                  </div>
                </div>

                {/* Premium Frosted Glass Text Overlay (Figma inspired) */}
                <div className={`video-card-frosted-overlay ${isHovered ? 'hovered' : ''}`} id={`card-frosted-overlay-${member.id}`}>
                  <h3 className="video-member-name text-2xl-medium" id={`member-name-${member.id}`}>{member.name}</h3>
                  <p className="video-member-role text-xl" id={`member-role-${member.id}`}>{member.role}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
