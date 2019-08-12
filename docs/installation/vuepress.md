# Vuepress

Using Henri's in a Vuepress project is a little harder by default, because Vuepress comes with Stylus and not with Sass. This documentation is also build using Vuepress and still it uses Henri's. 

So how?

### 1. Eject the theme

You need to eject the theme [eject vuepress](https://vuepress.vuejs.org/default-theme-config/#ejecting). `vuepress eject`, make sure you have vuepress install global to to this `npm i vuepress -g`.

### 2. All stylus files are converted to Sass

Vuepress uses stylus by default. All files can be converted, thats quite some work. You can use a tool like: [style-converter](https://github.com/txs1992/stylus-converter)


### 3. Install Sass 

`npm i node-sass sass-loader --save-dev`


### 4. Install Henri's

```npm i @henris/next @henris/custom --save-dev```

### 5. Add Henri's to you project

Add the files to your project styles folder. [add files](https://docs.henris.style/installation/#add-the-files)

### 6. Add your stylesheet

Create a `enhanceApp.js` file in the `.vuepress` root

```js
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  require('./theme/styles/app.scss')
}
```

### 7. Move all vuepress files

Move the Vuepress style files into a folder and include that files in your `app.scss`

```scss
...
@import 'vuepress/index';
...
```

### 8. Done!
