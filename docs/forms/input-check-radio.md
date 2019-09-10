# Checkbox & Radio

The Checkbox and radio inputs are quite similar, thats why you can style them in the same matter.

### Code Example 

```html
<div class="input-checkbox-element">
	<input id="my-checkbox" type="checkbox" />
	<label for="my-checkbox">Should this be checked?</label>
</div>
```

Make sure you have a wrapper and an input with directly after that the label. 

```scss
.input-checkbox-element{
	@include input-checkbox();
}
```


### Styling

| Element              | Property          | Sass Variable                      | Custom Property                       | Default value                                                                                       |
| -------------------- | ----------------- | ---------------------------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Overall              |
|                      | box-shadow        | `$input-form-shadow`               | `--input-form-shadow`                 | `0 0 1rem 0 rgba(0, 0, 0, 0) `                                                                      |
|                      | :focus box-shadow | `$input-form-shadow-focus`         | `--input-form-shadow-focus`           | `0 0 1rem 0 rgba(0, 0, 0, 0.05)`                                                                    |
|                      | transition        | `$input-form-transition`           | `--input-form-transition`             | `.3s ease-in-out`                                                                                   |
| Label                |
|                      | border-radius     | `$input-form-label-border-radius`  | `--input-form-label-border-radius`    | `0px`                                                                                               |
|                      | color             | `$input-form-label-text-color`     | `--input-form-label-text-color`       | `currentColor`                                                                                      |
|                      | line-height       | `$input-form-label-line-height`    | `--input-form-label-border-radius`    | `0px`                                                                                               |
|                      | transition        | `$input-form-label-transition`     | `--input-form-label-transition`       | inherit `$input-form-transition`                                                                    |
|                      | padding           | `$input-form-label-padding`        | `--input-form-label-padding`          | `1rem`                                                                                              |
|                      | padding-left      | `$input-form-label-padding-left`   | `--input-form-label-padding-left`     | `calc(#{$input-form-body-width} + #{$input-form-label-padding} + #{$input-form-body-left})`         |
| Radio/Checkbox Body  |
|                      | top               | `$input-form-body-top`             | `--input-form-body-top`               | inherit `$input-form-label-padding`                                                                 |
|                      | left              | `$input-form-body-left`            | `--input-form-body-left`              | `#{$input-form-label-padding`                                                                       |
|                      | width             | `$input-form-body-width`           | `--input-form-body-width`             | `1rem`                                                                                              |
|                      | height            | `$input-form-body-height`          | `--input-form-body-height`            | `1rem`                                                                                              |
|                      | border            | `$input-form-body-border`          | `--input-form-body-border`            | `1px solid currentColor`                                                                            |
|                      | background        | `$input-form-body-background`      | `--input-form-body-background`        | `white`                                                                                             |
|                      | box-shadow        | `$input-form-body-shadow`          | `--input-form-body-shadow`            | inherit `$input-form-shadow`                                                                        |
|                      | transition        | `$input-form-body-transition`      | `--input-form-body-transition`        | inherit `$input-form-transition`                                                                    |
|                      | border-radius     | `$input-form-body-border-radius`   | `--input-form-body-border-radius`     | `2px`                                                                                               |
| Radio/Checkbox check |
|                      | border-radius     | `$input-form-check-border-radius`  | `--input-checkbox-body-border-radius` | inherit `$input-form-body-border-radius`                                                            |
|                      | top               | `$input-form-check-top`            | `--input-form-check-top`              | `calc(#{$input-form-label-padding} + ($input-form-body-height / 2 - $input-form-check-height / 2))` |
|                      | left              | `$input-form-check-left`           | `--input-form-check-left`             | `calc(#{$input-form-label-padding} + ($input-form-body-width / 2 - $input-form-check-width / 2))`   |
|                      | width             | `$input-form-check-width`          | `--input-form-check-width`            | `0.5rem`                                                                                            |
|                      | height            | `$input-form-check-height`         | `--input-form-check-height`           | `0.5rem`                                                                                            |
|                      | border            | `$input-form-check-border`         | `--input-form-check-border`           | `0`                                                                                                 |
|                      | background        | `$input-form-check-background`     | `--input-form-check-background`       | `currentcolor`                                                                                      |
|                      | transition        | `$input-form-check-transition`     | `--input-form-check-transition`       | inherit `$input-form-transition`                                                                    |
|                      | border-radius     | `$input-form-check-border-radius`  | `--input-form-check-border-radius`    | `0`                                                                                                 |
| Radio                |
|                      | border-radius     | `$input-radio-body-border-radius`  | `--input-radio-body-border-radius`    | `50%`                                                                                               |
|                      | border-radius     | `$input-radio-check-border-radius` | `--input-radio-check-border-radius`   | `50%`                                                                                               |


### Mixins

There are several mixins to target different parts of an element. 


| Mixin                        | Targets                                                                             | Argument                  |
| ---------------------------- | ----------------------------------------------------------------------------------- | ------------------------- |
| input-form-body              | Body element of the clickable input.                                                | $type - checkbox or radio |
| input-form-body-checked      | Checked - Body element of the clickable input.                                      | $type - checkbox or radio |
| input-form-check             | Check element of the clickable input.                                               | $type - checkbox or radio |
| input-form-check-checked     | Checked - Check element of the clickable input.                                     | $type - checkbox or radio |
| input-form-label             | Full label of the html, before and after are used for the input.                    | $type - checkbox or radio |
| input-form-label-checked     | Checked - Full label of the html, before and after are used for the input.          | $type - checkbox or radio |
| input-form-label-hover       | Hovered - Full label of the html, before and after are used for the input.          | $type - checkbox or radio |
| input-form-label-focus       | Focused - Full label of the html, before and after are used for the input.          | $type - checkbox or radio |
| input-form-input             | Input element of the html, this element will be hidden.                             | $type - checkbox or radio |
| input-radio-body             | Body element of the clickable input.                                                |                           |
| input-radio-body-checked     | Checked - Body element of the clickable radio input.                                |                           |
| input-radio-check            | Check element of the clickable radio input.                                         |                           |
| input-radio-check-checked    | Checked - Check element of the clickable radio input.                               |                           |
| input-radio-label            | Full label of the html, before and after are used for the radio input.              |                           |
| input-radio-label-checked    | Checked - Full label of the html, before and after are used for the radio input.    |                           |
| input-radio-label-hover      | Hovered - Full label of the html, before and after are used for the radio input.    |                           |
| input-radio-label-focus      | Focused - Full label of the html, before and after are used for the radio input.    |                           |
| input-radio-input            | Radio Input element of the html, this element will be hidden.                       |                           |
| input-checkbox-body          | Body element of the clickable input.                                                |                           |
| input-checkbox-body-checked  | Checked - Body element of the clickable checkbox input.                             |                           |
| input-checkbox-check         | Check element of the clickable checkbox input.                                      |                           |
| input-checkbox-check-checked | Checked - Check element of the clickable checkbox input.                            |                           |
| input-checkbox-label         | Full label of the html, before and after are used for the checkbox input.           |                           |
| input-checkbox-label-checked | Checked - Full label of the html, before and after are used for the checkbox input. |                           |
| input-checkbox-label-hover   | Hovered - Full label of the html, before and after are used for the checkbox input. |                           |
| input-checkbox-label-focus   | Focused - Full label of the html, before and after are used for the checkbox input. |                           |
| input-checkbox-input         | Checkbox Input element of the html, this element will be hidden.                    |                           |