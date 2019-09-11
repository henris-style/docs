# Input Text

Styling input fields can be a pain, but Henri's makes it a little easier without losing all control. The only thing necessary is just to keep up with a simple buildup.


#### Simple Example

```html
<section class="my-section">
	...
	<div class="input-container">
		<input type="text" id="my-input" placeholder="John Doe" />
		<label>Name</label> 
	</div>
	...
</section>
```


```scss
.my-section{
	@include input-text-container('.input-container');
}
```

You don't have to be "unlogically" turning the input and the label around, but in order to give your field some extra interaction, this is necessary.  If you don't you will just loose that. Just make sure to "unreverse" the container with `$input-text-container-reverse: false;` before the include.



#### Types

By default the mixin gives you the following types for inputs; 	`email`, `tel`, `number`, `search`, `url`, `password`, `date`, `datetime-local`, `month`, `time` and `text`. This can be adjusted by passing just the type you want, or a list of types to any of the mixins. 

```scss
.my-section{
	// Target only input[type="text"]
	@include input-text-container('.input-container', 'text');

	// Target both input[type="text"] and input[type="email"]
	@include input-text-container('.input-container', ('text','email'));
	
	// Target all
	@include input-text-container('.input-container'));
}
```


### Mixins

There is a whole set of mixins to style your elements. 

| Mixin                        | Target                            | Description                                                      | Arguments          |
| ---------------------------- | --------------------------------- | ---------------------------------------------------------------- | ------------------ |
| input-text                   | `input`                           | Create all default styling on the input + label                  | `[$types]`         |
| input-text-container         | parent                            | Adds the input text automatically                                | `[$class, $types]` |
| input-text-label             | `input + label`                   | Targets just the lable                                           | `[$types]`         |
| input-text-focus             | `input:focus`                     | Targets a focussed input                                         | `[$types]`         |
| input-text-label-focus       | `input:focus + label`             | Targets the label when the input is focussed                     | `[$types]`         |
| input-text-placeholder       | `input:placeholder`               | Targets the placeholder of an input                              | `[$types]`         |
| input-text-placeholder-shown | `input:placeholder-shown`         | Targets the input when the placeholder is shown                  | `[$types]`         |
| input-text-label-filled      | `input:placeholder-shown + label` | Targets the label when the placeholder is shown (input is empty) | `[$types]`         |


### Styling Variables


| Element           | Property          | Sass Variable                           | Custom Property                        | Default value                 |
| ----------------- | ----------------- | --------------------------------------- | -------------------------------------- | ----------------------------- |
| Input             |
|                   | width             | `$input-text-input-width`               | `input-text-input-width`               | `100%`                        |
|                   | box-shadow        | `$input-text-input-shadow`              | `input-text-input-shadow`              | `0 0 1rem 0 rgba(0,0,0,0)`    |
|                   | focus: box-shadow | `$input-text-input-focus-shadow`        | `input-text-input-shadow`              | `0 0 1rem 0 rgba(0,0,0,0.25)` |
|                   | border            | `$input-text-input-border`              | `input-text-input-border`              | `1px solid currentColor`      |
|                   | background        | `$input-text-input-background`          | `input-text-input-background`          | `transparent`                 |
|                   | color             | `$input-text-input-color`               | `input-text-input-color`               | `currentColor`                |
|                   | font-size         | `$input-text-input-font-size`           | `input-text-input-font-size`           | `1em`                         |
|                   | font-family       | `$input-text-input-font-family`         | `input-text-input-font-family`         | `inherit`                     |
|                   | padding           | `$input-text-input-padding`             | `input-text-input-padding`             | `1em`                         |
|                   | opacity           | `$input-text-input-opacity`             | `input-text-input-opacity`             | `1`                           |
|                   | transition        | `$input-text-input-transition`          | `input-text-input-transition`          | `0.3s ease-in-out`            |
| Label             |
|                   | width             | `$input-text-label-width`               | `input-text-label-width`               | `100%`                        |
|                   | box-shadow        | `$input-text-label-shadow`              | `input-text-label-shadow`              | `0 0 1rem 0 rgba(0,0,0,0)`    |
|                   | border            | `$input-text-label-border`              | `input-text-label-border`              | `0`                           |
|                   | background        | `$input-text-label-background`          | `input-text-label-background`          | `transparent`                 |
|                   | color             | `$input-text-label-color`               | `input-text-label-color`               | `currentColor`                |
|                   | font-size         | `$input-text-label-font-size`           | `input-text-label-font-size`           | `1em`                         |
|                   | font-family       | `$input-text-label-font-family`         | `input-text-label-font-family`         | `inherit`                     |
|                   | padding           | `$input-text-label-padding`             | `input-text-label-padding`             | `1em`                         |
|                   | opacity           | `$input-text-label-opacity`             | `input-text-label-opacity`             | `0.75`                        |
|                   | transition        | `$input-text-label-transition`          | `input-text-label-transition`          | `0.3s ease-in-out`            |
|                   | focus: opacity    | `$input-text-label-focus-opacity`       | `input-text-label-focus-opacity`       | `1`                           |
|                   | filled: opacity   | `$input-text-label-filled-opacity`      | `input-text-label-filled-opacity`      | `1`                           |
| Input Placeholder |
|                   | focus: opacity    | `$input-text-placeholder-focus-opacity` | `input-text-placeholder-focus-opacity` | `0.5`                         |
| Container         |
|                   | position          | `$input-text-container-position`        | `input-text-container-position`        | `100%`                        |
|                   | width             | `$input-text-container-width`           | `input-text-container-width`           | `100%`                        |
|                   |                   | `$input-text-container-reverse`         |                                        | `true`                        |
|                   | margin            | `$input-text-container-margin`          | `input-text-container-margin`          | `1em`                         |


