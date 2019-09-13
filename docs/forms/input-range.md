# Input Range

The range slider is a quite hard to style element. With the mixin this will be a lot easier and it will keep it all its normal behaviour.

<div class="html-example">
<form>
	<div class="input-range">
		<input type="range">
		<label>How much?</label>
	</div>
	<div class="input-range">
		<input type="range" min="0" max="50">
		<label>With min/max</label>
	</div>
</form>
</div>

### Mixins

#### input-range-container

Create all elements for a container of the range slider with its defaults.

```scss
.element{
	@include input-range-container();
}
```



#### input-range

Default include for range slider, all range sliders within element will be styled. 

```html
<div class="input-range">
	<input type="range" min="0" max="100" id="my-range-slider" />
	<label for="my-range-slider">My range slider</label>
</div>
```
<div class="html-example">
	<div class="input-range">
		<input type="range" min="0" max="100" id="my-range-slider" />
		<label for="my-range-slider">My range slider</label>
	</div>
</div>


```scss
.element{
	@include input-range();
}
```

Or give a class or the range slider, in this way the mixins can be used anywhere but will only target the specific range slider with given class. 

```scss
	@include input-range('.my-range-slider');
```

#### input-range-input

Only targets the input of the range slider

```scss
.element{
	@include input-range();
}
```


#### input-range-input

Targets the label which comes after the Range slider

```scss
.element{
	@include input-range();
}
```

#### input-range-track

If there are any property which you want to set on the track only, you can use the `input-range-track` mixin.

```scss
	@include input-range-track{
		opacity: 0.5;
		&:hover{
			background-color: red; 
		}
	}
```

#### input-range-thumb

If there are any property which you want to set on the track only, you can use the `input-range-thumb` mixin.

```scss
	@include input-range-thumb{
		&:hover{
			transform: scale(1.2);
		}
	}
```


### Styling the Range slider

There is some default styling which can easily be overwritten. This can be done using CSS custom properties or defining sass variables before you use the mixin.

| Element      | Property        | Sass Variable                      | Custom Property                     | Default value                        |
| ------------ | --------------- | ---------------------------------- | ----------------------------------- | ------------------------------------ |
| Range Slider |
|              | `width`         | `$input-range-width`               | `--input-range-width`               | `100%`                               |
|              | `height`        | `$input-range-height`              | `--input-range-height`              | `1rem`                               |
|              | `shadow`        | `$input-range-shadow`              | `--input-range-shadow`              | `1px 1px 3px rgba(black, 0.2) inset` |
|              | `border`        | `$input-range-border`              | `--input-range-border`              | `0`                                  |
|              | `border-radius` | `$input-range-border-radius`       | `--input-range-border-radius`       | `50%`                                |
|              | `background`    | `$input-range-background`          | `--input-range-background`          | `transparent`                        |
| Thumb        |
|              | `width`         | `$input-range-thumb-width`         | `--input-range-thumb-width`         | `1rem`                               |
|              | `height`        | `$input-range-thumb-height`        | `--input-range-thumb-height`        | `1rem`                               |
|              | `shadow`        | `$input-range-thumb-shadow`        | `--input-range-thumb-shadow`        | inherit: `range-shadow`              |
|              | `border`        | `$input-range-thumb-border`        | `--input-range-thumb-border`        | `0`                                  |
|              | `border-radius` | `$input-range-thumb-border-radius` | `--input-range-thumb-border-radius` | `50%`                                |
|              | `background`    | `$input-range-thumb-background`    | `--input-range-thumb-background`    | `blue`                               |
| Track        |
|              | `width`         | `$input-range-track-width`         | `--input-range-width`               | `auto`                               |
|              | `height`        | `$input-range-track-height`        | `--input-range-height`              | `0.5rem`                             |
|              | `shadow`        | `$input-range-track-shadow`        | `--input-range-track-shadow`        | inherit: `range-shadow`              |
|              | `border`        | `$input-range-track-border`        | `--input-range-thumb-border`        | `0`                                  |
|              | `border-radius` | `$input-range-track-border-radius` | `--input-range-thumb-border-radius` | `50%`                                |
|              | `background`    | `$input-range-track-background`    | `--input-range-thumb-background`    | `white`                              |
| Min Max      |
|              |                 | `$input-range-max-label-padding`   |                                     | `0.5em`                                |
|              |                 | `$input-range-max-label-left`      |                                     | `100%`                               |
|              |                 | `$input-range-max-label-top`       |                                     | `50%`                                |
|              |                 | `$input-range-max-label-transform` |                                     | `translateY(-50%)`                   |
|              |                 | `$input-range-min-label-padding`   |                                     | `0.5em`                                |
|              |                 | `$input-range-min-label-right`     |                                     | `100%`                               |
|              |                 | `$input-range-min-label-top`       |                                     | `50%`                                |
|              |                 | `$input-range-min-label-transform` |                                     | `translateY(-50%)`                   |
| Settings     |
|              |                 | `$input-range-container-reverse`   |                                     | `true`                               |
|              |                 | `$input-range-min-label`           |                                     | `true`                               |
|              |                 | `$input-range-max-label`           |                                     | `true`                               |