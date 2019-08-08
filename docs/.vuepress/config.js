// .vuepress/config.js
module.exports = {
	themeConfig: {
		sidebar: [
			{
				title: 'Functions',
				path: '/functions/',
				collapsable: false,
				sidebarDepth: 1,
				children: [
					'/functions/utils/characters',
					'/functions/utils/is',
					'/functions/utils/list',
					'/functions/utils/maps',
					'/functions/utils/size',
					'/functions/utils/strings',
					'/functions/utils/units'
				]
			},
			{
				title: 'Mixins',
				collapsable: false,

				children: ['mixins/utils/family','mixins/utils/wildcard','mixins/utils/parent']
			},
			{
				title: 'Color',
				children: [
					/* ... */
				]
			},
			{
				title: 'Animation',
				children: [
					/* ... */
				]
			},
			{
				title: 'Grid',
				children: [
					/* ... */
				]
			}
		]
	}
};
