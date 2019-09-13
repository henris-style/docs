// .vuepress/config.js
module.exports = {
	themeConfig: {
		sidebar: [
			{
				title: 'Guide',
				collapsable: false,
				children: ['guide/getting-started', 'guide/installation']
			},
			{
				title: 'Installation',
				collapsable: false,
				children: ['installation/nuxt', 'installation/vuepress', 'installation/output', 'installation/settings']
			},
			{
				title: 'Grid',
				collapsable: false,
				children: ['grid/basic', 'grid/classes', 'grid/structure', 'grid/media-queries',  'grid/min-max', 'grid/tips']
			},
			{
				title: 'Color',
				collapsable: false,
				children: ['color/custom', 'color/contra']
			},
			{
				title: 'Animation',
				collapsable: false,
				children: [
					'animation/easing',
					'animation/transition',
				]
			},
			{
				title: 'Typography',
				path: '/typography/'
			},
			{
				title: 'Forms',
				path: '/forms/',
				collapsable: false,
				sidebarDepth: 1,
				children: [
					'forms/input-text',
					'forms/input-check-radio',
					'forms/input-range',
					'forms/input-switch'
				]
			},
			{
				title: 'Functions',
				collapsable: true,
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
				collapsable: true,
				children: [
					'mixins/utils/family',
					'mixins/utils/wildcard',
					'mixins/utils/parent',
					'mixins/styling/menu'
				]
			},

			// {
			// 	title: 'Styled',
			// 	collapsable: false,
			// 	children: [
			// 		'basic/buttons',
			// 		'basic/forms',
			// 		'basic/patterns'
			// 	]
			// }
		]
	}
};
