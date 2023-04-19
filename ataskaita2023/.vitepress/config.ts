import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ataskaita 2022-2023",
  description: "VU Studentų atstovybės metų veiklos ataskaita už 2022-2023 m. kadenciją.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'facebook', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'instagram', link: '' },
    ]
  }
})
