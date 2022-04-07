module.exports = {
  title: '前端面试字典',
  description: 'Just playing around',
  base: '/FE-interview/',
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
        children: [
          { title: 'JS常规问题', path: '/JavaScript/base' },
          { title: 'JS重点考查内容', path: '/JavaScript/important' },
          { title: '数组相关', path: '/JavaScript/array' },
          { title: '对象相关', path: '/JavaScript/object' },
          { title: '正则相关', path: '/JavaScript/reg' },
        ],
      },
      {
        title: 'ES6相关',
        collapsable: true,
        children: [{ title: 'ES6常规问题', path: '/ES6/base' }],
      },
      {
        title: 'CSS基础',
        collapsable: true,
        children: [
          { title: 'CSS常规问题', path: '/CSS/base' },
          { title: 'css3与html5', path: '/CSS/css3' },
        ],
      },
      {
        title: 'VUE相关',
        collapsable: true,
        children: [
          { title: 'vue基础', path: '/vue/base' },
          { title: 'vuex篇', path: '/vue/vuex' },
          { title: 'vue-router篇', path: '/vue/router' },
          { title: '生命周期篇', path: '/vue/life' },
          { title: '进阶篇', path: '/vue/top' },
          { title: 'vue3响应式', path: '/vue/vue3' },
        ],
      },
      {
        title: '性能优化',
        collapsable: true,
        children: [
          { title: '性能优化基础', path: '/improve/base' },
          { title: '防抖与节流', path: '/improve/throttle' },
        ],
      },
      {
        title: 'CANVAS相关',
        collapsable: true,
        children: [{ title: 'CANVAS基础', path: '/canvas/base' }],
      },
      {
        title: 'node相关',
        collapsable: true,
        children: [{ title: 'koa', path: '/node/koa' }],
      },
      {
        title: 'webpack相关',
        collapsable: true,
        children: [{ title: 'webpack基础', path: '/webpack/base' }],
      },
      {
        title: 'vite相关',
        collapsable: true,
        children: [{ title: 'vite基础', path: '/vite/base' }],
      },
      {
        title: 'http相关',
        collapsable: true,
        children: [{ title: 'http基础', path: '/http/base' }],
      },
      {
        title: '业务相关问题',
        collapsable: true,
        children: [{ title: '业务相关问题', path: '/business/base' }],
      },
    ],
  },
};
