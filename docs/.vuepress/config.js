module.exports = {
  title: 'Hello VuePress',
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
        text: 'hihihi的博客',
        items: [
          { text: 'Github', link: 'https://github.com/mqyqingfeng' },
          {
            text: '掘金',
            link: 'https://juejin.cn/user/712139234359182/posts',
          },
        ],
      },
    ],
    sidebar: [
      {
        title: '欢迎学习',
        path: '/foo',
        collapsable: false,
        children: [{ title: '学前必读', path: '/foo/one' }],
      },
      {
        title: '基础学习',
        path: '/bar',
        collapsable: false,
        children: [
          { title: '条件类型', path: '/bar/four' },
          { title: '泛型', path: '/bar/three' },
        ],
      },
    ],
  },
};
