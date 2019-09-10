# Transitions

## Simple transition
A simple mixin for single property transition

```scss
@include transition($prop, $timing, $ease, $delay);
```

| variables | type            | Description                                           		|
|-----------|-----------------|-----------------------------------------------------------|
| `$prop`   | `String`        | Property to which transition should be applied        		|
| `$timing` | `Number|String` | Transition duration. Number is used as **ms**             |
| `$ease`   | `String`        | Timing function                                       		|
| `$delay`  | `Number|String` | Transition delay duration. Number is interpreted as **ms**|

::: tip
 `@henris/utils/index` has to be imported before using the mixin.
:::

Example :

```scss
// with duration number
.element{
	@include transition('opacity', 500, linear, 0);
}
// with string duration
.element{
	@include transition('opacity', 0.5s, linear, 0s);
}
```

Will generate:

```scss
// with duration number
.element {
  transition: opacity 500ms 0s cubic-bezier(0.25, 0.25, 0.75, 0.75);
}
// with string duration
.element {
  transition: opacity 500ms 0s cubic-bezier(0.25, 0.25, 0.75, 0.75);
}
```

## Multiple transition proprieties
Henris comes with a mixin to easily define a bunch of transitions on the same element. The `transition-group` mixin will also generate the `will-change` property.


```scss
// list definition
$transitions: (
	($prop, $timing, $delay, $ease),
	($prop, $timing, $delay, $ease),
	...
);
@include transition-group($transitions);
```
Each row of the transition list as to be defined by these 4 arguments in the order listed.

| variables | type            | Description                                           |
|-----------|-----------------|-------------------------------------------------------|
| `$prop`  | `String`        | Property to which transition should be applied         |
| `$timing` | `Number|String` | Transition duration. Number is used as ms             |
| `$delay`  | `Number|String` | Transition delay duration. Number is interpreted as ms|
| `$ease`   | `String`        | Timing function                                       |

Example :

```scss
$transitions: (
  ('opacity', 500, 0, linear),
  ('transform', 700, 0, ease),
  ('color', 500, 0, easeInQuad),
);
.element{
	@include transition-group($transitions);
}
```

Will generate:

```css
.element {
  transition:
		opacity 500ms 0ms cubic-bezier(0.25, 0.25, 0.75, 0.75),
		transform 700ms 0ms cubic-bezier(0.25, 0.10, 0.25, 1),
		color 500ms 0ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
  will-change: opacity, transform, color;
}

```
