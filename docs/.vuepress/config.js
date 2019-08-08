// .vuepress/config.js
module.exports = {
  themeConfig: {
		sidebar: [
      {
        title: 'Functions',   // required
        path: '/functions/',      // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/functions/utils/characters',
          '/functions/utils/strings'
        ]
      },
      {
        title: 'Mixins',
        children: [ /* ... */ ]
      },
      {
        title: 'Color',
        children: [ /* ... */ ]
      },
      {
        title: 'Animation',
        children: [ /* ... */ ]
      },
      {
        title: 'Grid',
        children: [ /* ... */ ]
      }
    ]
  }
}
