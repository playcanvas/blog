import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css';

const GL = '#f7768e'; // WebGL 2
const GPU = '#4cc9f0'; // WebGPU

// PlayCanvas GSplat Benchmark — frame time in milliseconds per splat budget.
const DEVICES = {
  desktop: {
    title: 'Apple M4 Max',
    meta: 'Metal-3 · 1298 × 962',
    labels: ['1M', '2M', '3M', '4M', '6M', '8M', '10M', '15M', '20M', '25M', '30M', '35M'],
    webglMs: [7.29, 7.12, 8.01, 8.80, 11.52, 14.02, 20.80, 34.66, 44.93, 53.74, 64.08, 75.41],
    webgpuMs: [7.21, 6.51, 7.38, 6.85, 7.13, 8.00, 8.06, 9.44, 10.22, 11.19, 11.77, 13.20]
  },
  mobile: {
    title: 'iPhone 13 Pro Max',
    meta: 'Apple GPU · 642 × 1126',
    labels: ['1M', '2M', '3M', '4M'],
    webglMs: [26.23, 28.20, 39.23, 49.13],
    webgpuMs: [12.88, 13.66, 18.96, 23.60]
  }
};

const toFps = arr => arr.map(ms => (ms == null ? null : +(1000 / ms).toFixed(1)));

export default function GSplatPerfChart({ device = 'desktop' }) {
  const canvasRef = useRef(null);
  const d = DEVICES[device];

  useEffect(() => {
    let chart;
    let cancelled = false;

    // Chart.js touches the DOM, so load it client-side only (keeps SSR safe).
    import('chart.js/auto').then(({ default: Chart }) => {
      const ctx = canvasRef.current;
      if (cancelled || !ctx) return;

      const mkGradient = (color) => {
        const g = ctx.getContext('2d').createLinearGradient(0, 0, 0, 420);
        g.addColorStop(0, `${color}40`);
        g.addColorStop(1, `${color}00`);
        return g;
      };
      const ds = (label, data, color) => ({
        label,
        data,
        borderColor: color,
        backgroundColor: mkGradient(color),
        borderWidth: 3,
        pointBackgroundColor: color,
        pointBorderColor: '#0d1117',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        tension: 0.3,
        fill: true,
        spanGaps: true
      });

      chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: d.labels,
          datasets: [
            ds('WebGL 2 Renderer', toFps(d.webglMs), GL),
            ds('WebGPU Renderer', toFps(d.webgpuMs), GPU)
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { mode: 'index', intersect: false },
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#0d1117',
              borderColor: 'rgba(255,255,255,0.12)',
              borderWidth: 1,
              padding: 12,
              titleColor: '#e6edf3',
              bodyColor: '#e6edf3',
              callbacks: {
                label: c => `${c.dataset.label}: ${c.parsed.y == null ? 'n/a' : `${c.parsed.y} fps`}`
              }
            }
          },
          scales: {
            x: {
              title: { display: true, text: 'Splat budget', color: '#8b949e', font: { size: 13 } },
              grid: { color: 'rgba(255,255,255,0.06)' },
              ticks: { color: '#8b949e' }
            },
            y: {
              beginAtZero: true,
              title: { display: true, text: 'Frames per second (fps)', color: '#8b949e', font: { size: 13 } },
              grid: { color: 'rgba(255,255,255,0.06)' },
              ticks: { color: '#8b949e' }
            }
          }
        }
      });
    });

    return () => {
      cancelled = true;
      if (chart) chart.destroy();
    };
  }, [device, d]);

  const gl = toFps(d.webglMs);
  const gpu = toFps(d.webgpuMs);
  const speed = d.labels.map((_, i) =>
    (d.webglMs[i] == null || d.webgpuMs[i] == null) ? null : +(d.webglMs[i] / d.webgpuMs[i]).toFixed(1));

  return (
    <div className={styles.card}>
      <div className={styles.cardHead}>
        <span className={styles.title}>{d.title}</span>
        <span className={styles.meta}>{d.meta}</span>
      </div>
      <div className={styles.legend}>
        <span><i className={styles.swatch} style={{ background: GL }} />WebGL 2 Renderer</span>
        <span><i className={styles.swatch} style={{ background: GPU }} />WebGPU Renderer</span>
      </div>
      <div className={styles.chartBox}><canvas ref={canvasRef} /></div>
      <div className={styles.tableWrap}>
        <table className={styles.fps}>
          <thead>
            <tr>
              <th>Budget</th>
              {d.labels.map(l => <th key={l}>{l}</th>)}
            </tr>
          </thead>
          <tbody>
            <tr className={styles.gl}>
              <td>WebGL 2 <span className={styles.unit}>fps</span></td>
              {gl.map((v, i) => <td key={i} className={styles.val}>{v == null ? '–' : v}</td>)}
            </tr>
            <tr className={styles.gpu}>
              <td>WebGPU <span className={styles.unit}>fps</span></td>
              {gpu.map((v, i) => <td key={i} className={styles.val}>{v == null ? '–' : v}</td>)}
            </tr>
            <tr className={styles.spd}>
              <td>WebGPU speedup</td>
              {speed.map((s, i) => <td key={i}>{s == null ? '–' : `${s}×`}</td>)}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
