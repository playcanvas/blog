import React, { useState } from 'react';
import styles from './styles.module.css';

/**
 * Click-to-load iframe embed ("facade" pattern).
 *
 * Renders a lightweight poster/placeholder and only injects the iframe when the
 * reader clicks — so heavy apps (large Gaussian splats, etc.) never download on
 * page load. Nothing is fetched from `src` until activation.
 */
export default function AppEmbed({
  src,
  title = 'Interactive app',
  subtitle,
  note,
  poster,
  allow = 'fullscreen; xr-spatial-tracking; accelerometer; gyroscope',
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={styles.embed}>
      {loaded ? (
        <iframe
          className={styles.frame}
          src={src}
          title={title}
          allow={allow}
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className={styles.facade}
          style={poster ? { backgroundImage: `url("${poster}")` } : undefined}
          onClick={() => setLoaded(true)}
          aria-label={`Launch ${title}`}
        >
          <span className={styles.play} aria-hidden="true">▶</span>
          <span className={styles.title}>{title}</span>
          {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
          {note && <span className={styles.note}>{note}</span>}
        </button>
      )}
    </div>
  );
}
