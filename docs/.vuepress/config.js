module.exports = {
  title: '前端面试字典',
  description: 'Just playing around',
  base: '/vuepress-starter/',
  configureWebpack: {
    resolve: {
      alias: {
        // "@alias": "path/to/some/dir",
      },
    },
  },
  // theme: 'reco',
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  themeConfig: {
    // lastUpdated: '上次更新',
    subSidebar: 'auto',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '了解更多',
        items: [
          { text: 'Github', link: 'https://github.com/strugglinglee' },
          {
            text: '博客',
            link: 'https://blog.strugglinglee.cn/',
          },
          {
            text: '掘金',
            link: 'https://juejin.cn/user/1028798615654669',
          },
        ],
      },
    ],
    sidebar: [
      {
        title: 'JS基础',
        // path: '/JavaScript',
        collapsable: true,
        children: [{ title: 'JS基础题目', path: '/JavaScript/base' }],
      },
      {
        title: 'VUE相关',
        // path: '/vue',
        collapsable: true,
        children: [
          { title: 'vue基础', path: '/vue/base' },
          { title: 'vuex篇', path: '/vue/vuex' },
          { title: 'vue-router篇', path: '/vue/router' },
          { title: '生命周期篇', path: '/vue/life' },
          { title: '进阶篇', path: '/vue/top' },
        ],
      },
      {
        title: 'VUE3相关',
        // path: '/vue3',
        // collapsable: true,
        children: [{ title: 'vue3响应式', path: '/vue3/base' }],
      },
    ],
  },
};
