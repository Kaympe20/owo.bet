import Unocss from 'unocss/vite'
import { defineConfigWithTheme, type DefaultTheme } from 'vitepress'
import { version } from '../../package.json'

interface ThemeConfig extends DefaultTheme.Config {
  blog?: {
    title?: string
    description?: string
  }
}

export default defineConfigWithTheme<ThemeConfig>({
  base: '/',
  description: 'Blog included. Built on top of VitePress and UnoCSS.',
  markdown: {
    headers: {
      level: [0, 0],
    },
  },
  themeConfig: {
    footer: {
      message: 'Made with 🩷 by Kayla Blosser',
//      copyright: 'Copyright © 2026 owo.bet',
    },
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Kaympe20/owo.bet' },
    ],
    editLink: {
      pattern: 'https://github.com/Kaympe20/owo.bet/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    nav: nav(),
    sidebar: {
      '/guide/': sidebarGuide(),
      '/config/': sidebarConfig(),
    },
    blog: {
      title: 'My Blog',
      description: 'Some bad opinions you probably would prefer not to read.',
    },

  },
  title: "Kayla's Korner",
  vite: {
    plugins: [
      Unocss({
        configFile: '../../unocss.config.ts',
      }),
    ],
  },
})

function nav() {
  return [
    // { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
    // { text: 'Configs', link: '/config/', activeMatch: '/config/' },
    { text: 'Blog', link: '/blog/', activeMatch: '/blog/' },
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: 'What is this?', link: '/guide/' },
      ],
    },
    {
      text: 'Features',
      collapsible: true,
      items: [
        { text: 'UnoCSS', link: '/guide/features/unocss' },
      ],
    },
  ]
}

function sidebarConfig() {
  return [
    {
      text: 'Config',
      items: [
        { text: 'Introduction', link: '/config/' },
        { text: 'UnoCSS', link: '/config/unocss' },
      ],
    },
  ]
}
