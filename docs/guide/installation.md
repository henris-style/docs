---
title: 'Installation'
permalink: /installation
---
# Installation

```
npm install henris
```

## Add the files

1. Install the package using `npm` or `yarn`. 
2. Make sure you have installed `sass /or node-sass` and `sass-loader`
3. Copy the files from this repository:

[repo](https://raw.githubusercontent.com/henris-style/setup-files)


Or go to the scss folder and run:

``` bash
bash <(curl -s https://raw.githubusercontent.com/henris-style/setup-files/master/setup.sh)
```


## app.scss

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


