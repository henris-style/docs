---
title: 'Installation'
permalink: /installation
---
# Installation

```
npm install henris
```

## Add the files

Install the package using `npm` or `yarn`. 

Make sure you have installed `sass /or node-sass` and `sass-loader`

Create the following structure:

<ul class="dir__list">
	<li class="dir">assets
		<ul class="dir__list">
			<li class="dir">scss
				<ul classs="dir__list">
					<li class="file" ext="scss">app</li>
					<li class="dir">tools
						<ul class="dir__list">
							<li class="file" ext="scss">_index</li>
							<li class="file" ext="scss">_pre</li>
							<li class="file" ext="scss">_post</li>
						</ul>
					</li>
					<li class="dir">typography
						<ul class="dir__list">
							<li class="file" ext="scss">_index</li>
							<li class="file" ext="scss">_embed</li>
							<li class="file" ext="scss">_spacing</li>
							<li class="file" ext="scss">_usage</li>
						</ul>
					</li>
				</ul>
			</li>
		</ul>
	</li>
</ul>

Or go to the scss folder and run:
``` bash
bash <(curl -s https://raw.githubusercontent.com/MatiseAms/henris-setup-files/master/setup.sh)
```


#### app.scss
```scss
// Basics
@import 'tools/pre';
@import 'typography/embed';

// Define output settings for project
$output: set-output(css, true);

// Output the whole framework
@import '~henris';
@import 'tools/post';
```




## In a Nuxt project

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