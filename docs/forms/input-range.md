# Input Range

The range slider is a quite hard to style element. With the mixin this will be a lot easier and it will keep it all its normal behaviour.

### Mixins

#### input-range

Default include for range slider, all range sliders within element will be styled. 

```scss
.element{
	@include input-range();
}
```

Or give a class or the range slider, in this way the mixins can be used anywhere but will only target the specific range slider with given class. 

```scss
	@include input-range('.my-range-slider');
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
| Range Slider | `width`         | `$input-range-width`               | `--input-range-width`               | `100%`                               |
|              | `height`        | `$input-range-height`              | `--input-range-height`              | `1rem`                               |
|              | `shadow`        | `$input-range-shadow`              | `--input-range-shadow`              | `1px 1px 3px rgba(black, 0.2) inset` |
|              | `border`        | `$input-range-border`              | `--input-range-border`              | `0`                                  |
|              | `border-radius` | `$input-range-border-radius`       | `--input-range-border-radius`       | `50%`                                |
|              | `background`    | `$input-range-background`          | `--input-range-background`          | `transparent`                        |
| Thumb        | `width`         | `$input-range-thumb-width`         | `--input-range-thumb-width`         | `1rem`                               |
|              | `height`        | `$input-range-thumb-height`        | `--input-range-thumb-height`        | `1rem`                               |
|              | `shadow`        | `$input-range-thumb-shadow`        | `--input-range-thumb-shadow`        | inherit: `range-shadow`              |
|              | `border`        | `$input-range-thumb-border`        | `--input-range-thumb-border`        | `0`                                  |
|              | `border-radius` | `$input-range-thumb-border-radius` | `--input-range-thumb-border-radius` | `50%`                                |
|              | `background`    | `$input-range-thumb-background`    | `--input-range-thumb-background`    | `blue`                               |
| Track        | `width`         | `$input-range-track-width`         | `--input-range-width`               | `auto`                               |
|              | `height`        | `$input-range-track-height`        | `--input-range-height`              | `0.5rem`                             |
|              | `shadow`        | `$input-range-track-shadow`        | `--input-range-track-shadow`        | inherit: `range-shadow`              |
|              | `border`        | `$input-range-track-border`        | `--input-range-thumb-border`        | `0`                                  |
|              | `border-radius` | `$input-range-track-border-radius` | `--input-range-thumb-border-radius` | `50%`                                |
|              | `background`    | `$input-range-track-background`    | `--input-range-thumb-background`    | `white`                              |
 