# Switch

Just a simple yes or no on a field can be done with a switch


<div class="html-example">
<form>
	<div class="input-switch">
		<input type="checkbox" id="input-switch-test1">
		<label for="input-switch-test1">Yeah</label>
	</div>
</form>
</div>

```html
	<div class="input-switch">
		<input type="checkbox" id="input-switch-test1">
		<label for="input-switch-test1">Yeah</label>
	</div>
```
```scss
body{
	@include input-switch-container('.input-switch'` |
}
```


### Styling variables

| Element | Property | Sass Variable                       | Custom Property                   | Default value                                     |
| ------- | -------- | ----------------------------------- | --------------------------------- | ------------------------------------------------- |
| Label   |
|         |          | `$input-switch-label-padding`       | `--input-switch-label-padding`    | `1em`                                             |
| Body    |
|         |          | `$input-switch-body-width`          | `--input-switch-body-width`       | `1.5rem`                                          |
|         |          | `$input-switch-body-height`         | `--input-switch-body-height`      | `1rem`                                            |
|         |          | `$input-switch-body-border-radius`  | `--input-switch-body-height`      | `calc(#{$input-switch-body-height} / 2)`          |
|         |          | `$input-switch-body-background`     | `--input-switch-body-background`  | `white`                                           |
|         |          | `$input-switch-body-border`         | `--input-switch-body-border`      | `1px solid currentColor`                          |
|         |          | `$input-switch-check-width`         | `--input-switch-check-width`      | `.5rem`                                           |
| Check   |
|         |          | `$input-switch-check-height`        | `--input-switch-check-height`     | `.5rem`                                           |
|         |          | `$input-switch-check-border-radius` | `--input-switch-check-height`     | `calc(#{$input-switch-check-height} / 2)`         |
|         |          | `$input-switch-check-top`           | `--input-switch-check-top`        | `calc(50% - (#{$input-switch-check-height} / 2))` |
|         |          | `$input-switch-check-background`    | `--input-switch-check-background` | `black`                                           |
|         |          | `$input-switch-check-border`        | `--input-switch-check-border`     | `0`                                               |
|         |          | `$input-switch-check-shadow`        | `--input-switch-check-shadow`     | `0 0 0 2px black inset`                           |
