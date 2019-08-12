# Nuxt

You can use the `npx create-henris-project` installer or do it manually:


Add the following to your `nuxt.config.js` within the module.export:
```js
css: [
	{
		src: '~assets/scss/app.scss',
		lang: 'scss'
	}
]
```

### To use the tools:
Create a symlink to the tools so you can use all henris settings and tools in components without adding
unnecessary css.
```js
build: {
	extend(config, { isDev, isClient }) {
		config.resolve.alias['~tools'] = 'assets/scss/tools/_index.scss';
	}
}
```

Now you can use the full tools in a component and have access to all mixins, functions and defined global settings (pre/post).

```html
<style lang="scss">
@import '~tools';
</style>
```