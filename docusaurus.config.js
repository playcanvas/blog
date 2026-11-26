// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PlayCanvas Blog',
  tagline:
    'News, releases and developer stories from the team behind PlayCanvas: the open-source WebGL and WebGPU engine, the browser-based Editor and SuperSplat.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://blog.playcanvas.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  // GitHub Pages serves each page as <slug>/index.html, so canonical and
  // sitemap URLs need the trailing slash to avoid a 301 on every one.
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'playcanvas', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  future: {
    faster: true,
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: ['docusaurus-plugin-sass'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          blogTitle: 'PlayCanvas Blog',
          blogDescription:
            'News, releases and developer stories from the team behind PlayCanvas: the open-source WebGL and WebGPU engine, the browser-based Editor and SuperSplat.',
          blogSidebarCount: 15,

          routeBasePath: '/', // Serve the blog at the site's root
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/playcanvas/blog/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.scss',
        },
        sitemap: {
          // Tag and pagination listings are thin duplicates of the posts.
          ignorePatterns: ['/tags/**', '/page/**', '/authors/*/page/**'],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/playcanvas-social-card.jpg',
      navbar: {
        title: 'PlayCanvas Blog',
        logo: {
          alt: 'PlayCanvas Logo',
          src: 'img/playcanvas.png',
        },
        items: [
          {
            'aria-label': 'Discord Invite',
            'className': 'navbar--discord-link',
            'href': 'https://discord.gg/RSaMRzg',
            'position': 'right',
          },
          {
            'aria-label': 'GitHub',
            'className': 'navbar--github-link',
            'href': 'https://github.com/playcanvas',
            'position': 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Products',
            items: [
              {
                label: 'Engine',
                href: 'https://playcanvas.com/products/engine',
              },
              {
                label: 'Editor',
                href: 'https://playcanvas.com/products/editor',
              },
              {
                label: 'SuperSplat',
                href: 'https://superspl.at',
              },
              {
                label: 'Examples',
                href: 'https://playcanvas.com/examples/',
              },
            ],
          },
          {
            title: 'Docs',
            items: [
              {
                label: 'User Manual',
                href: 'https://developer.playcanvas.com/user-manual/',
              },
              {
                label: 'Tutorials',
                href: 'https://developer.playcanvas.com/tutorials/',
              },
              {
                label: 'API Reference',
                href: 'https://api.playcanvas.com',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'X',
                href: 'https://x.com/playcanvas',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/playcanvas',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/playcanvas',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/RSaMRzg',
              },
              {
                label: 'Forum',
                href: 'https://forum.playcanvas.com',
              },
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/PlayCanvas/',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Blog',
                href: 'https://blog.playcanvas.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/playcanvas',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@playcanvas',
              },
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PlayCanvas Ltd.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['glsl'],
      },
    }),
};

export default config;
