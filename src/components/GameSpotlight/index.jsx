import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

/**
 * Side-by-side spotlight for a portrait game: a looping gameplay clip on one
 * side, and the game's intro, developer quote and Snapcode on the other.
 * Stacks into a single column on narrow screens.
 *
 * The clip's source is only attached once the spotlight nears the viewport:
 * autoplay makes browsers ignore `preload`, so a static `src` would download
 * every clip on the page as soon as it opens.
 */
export default function GameSpotlight({
  title,
  video,
  snapcode,
  developer,
  studio,
  children,
}) {
  const videoRef = useRef(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return undefined;
    if (!('IntersectionObserver' in window)) {
      setNear(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setNear(true);
        observer.disconnect();
      }
    }, { rootMargin: '600px 0px' });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Autoplay normally starts the clip once its source arrives; play() covers
    // browsers that only honour autoplay for sources present at load.
    if (near) videoRef.current?.play().catch(() => {});
  }, [near]);

  return (
    <div className={styles.spotlight}>
      <div className={styles.media}>
        <video
          ref={videoRef}
          className={styles.video}
          src={near ? video : undefined}
          playsInline
          autoPlay
          muted
          loop
          preload="none"
          aria-label={`${title} gameplay`}
        />
      </div>
      <div className={styles.body}>
        <div className={styles.meta}>
          <strong>{studio}</strong> · {developer}
        </div>
        {children}
        <div className={styles.play}>
          <img
            className={styles.snapcode}
            src={snapcode}
            alt={`Snapcode for ${title}`}
            loading="lazy"
          />
          <div className={styles.playText}>
            <strong>Play {title} in Snapchat</strong>
            <span>Scan the Snapcode with your phone's camera or Snapchat to jump straight in.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
