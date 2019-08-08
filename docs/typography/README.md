# Typography

## Defining fonts

Include or define up to 4 fonts.

| Font | Variable         |
| ---- | ---------------- |
| 1st  | $font-primary    |
| 2nd  | $font-secondary  |
| 3rd  | $font-tertiary   |
| 4th  | $font-quaternary |

## Settings

| Property         | Default value                   | Example                           | Type    |
| ---------------- | ------------------------------- | --------------------------------- | ------- |
| `font-family`\*  | `null`                          | `"Graphik", sans-serif`           | string  |
| `load`           | `false`                         | `true`                            | boolean |
| `weights`        | `()`                            | `('light': 200, 'Regular': 400 )` | map     |
| `weight-classes` | `false`                         | `true`                            | boolean |
| `path`           | `"/fonts"`                      | `"/assets/fonts"`                 | string  |
| `files`          | `"woff2", "woff", "ttf", "eot"` |                                   | list    |
| `use`            | `()`                            | `('h1','.title','blockquote')`    | list    |
| `types`          | `('normal')`                    | `('normal','italic')`             | list    |

\* is required

## Example

```scss
$font-primary: (
	font-family: (
		Graphik,
		sans-serif
	),
	load: true,
	weights: (
		"Light": 100,
		"Regular": 400,
		"Medium": 500,
		"Bold": 600,
		"Black": 800
	),
	weight-classes: false,
	path: "/fonts",
	files: (
		"woff2",
		"woff",
		"ttf",
		"eot"
	),
	use: (
		"h1",
		"h3",
		"h4",
		"span.text",
		"#section"
	),
	types: (
		"normal",
		"italic"
	)
);
```

::: tip

- Font weights need to be set in order to load fonts.
- Font weight names must be identical to actual file names.
- The first entry in font-family will be loaded when loaded is true.
- The space in a font-family name will be removed for the file name. `Helvetica Neue` will be `HelveticaNeue`
- Font includes uses the following syntax: `fontFamily-fontWeightName.ttf`
- When font-type `"italic"` is added, the file name should be `fontFamily-fontWeightNameItalic.ttf`
- There is an issue with font-family names with spaces. Avoid these for now.
  :::

## Weights

### classes

Henri's can automatically generate classes based on the given font-weights. Enable the `weight-classes` and henris will give you classes like `.font-light{ font-weight: 100; }`

### function

You can also use the `font-weight()` function.

```scss
.element {
	font-weight: font-weight(Light);
}
```

Will give you the Light weight from any of the included font-sets. When there are double font-weights over multiple font-sets. The font-weight hierarchy is: `primary > secondary > tertiary > quaternary`. So primary will overrule.

If you want to use a font-weight, which is overruled by an earlier set. You can use the second argument.

```scss
.element {
	font-weight: font-weight(Light, $font-tertiary);
}
```
