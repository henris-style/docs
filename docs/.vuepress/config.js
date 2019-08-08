// .vuepress/config.js
module.exports = {
	themeConfig: {
		sidebar: [{
      title: 'Guide',
      collapsable: false,
      children: [
        'guide/getting-started',
        'guide/installation'
      ]
    },
			{
				title: 'Functions',
				path: '/functions/',
				collapsable: false,
				sidebarDepth: 1,
				children: [
					'functions/utils/characters',
					'functions/utils/is',
					'functions/utils/list',
					'functions/utils/maps',
					'functions/utils/size',
					'functions/utils/strings',
					'functions/utils/units'
				]
			},
			{
				title: 'Mixins',
				collapsable: false,
				children: ['mixins/utils/family','mixins/utils/wildcard','mixins/utils/parent','mixins/styling/menu']
			},
			{
				title: 'Color',
				collapsable: false,
				children: [
          'color/custom'
				]
			},
			{
				title: 'Animation',
				collapsable: false,
				children: [
					/* ... */
				]
			},
			{
				title: 'Typography',
				path: '/typography/',
			},
			{
				title: 'Basics',
				collapsable: false,
				children: [
          'basic/buttons',
          'basic/forms',
          'basic/output',
          'basic/patterns',
          'basic/settings'
				]
			},
			{
				title: 'Grid',
				collapsable: false,
				children: [
          'grid/classes'
				]
			}
			
		]
	}
};
