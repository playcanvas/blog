import React from 'react';
import styles from './styles.module.css';

/**
 * Side-by-side spotlight for a portrait game: a looping gameplay clip on one
 * side, and the game's intro, developer quote and Snapcode on the other.
 * Stacks into a single column on narrow screens.
 */
export default function GameSpotlight({
  title,
  video,
  snapcode,
  developer,
  studio,
  children,
}) {
  return (
    <div className={styles.spotlight}>
      <div className={styles.media}>
        <video
          className={styles.video}
          src={video}
          playsInline
          autoPlay
          muted
          loop
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
            <span>Open the Snapchat camera, point it at the Snapcode and press and hold.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
