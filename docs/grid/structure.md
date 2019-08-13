
# Structure

Always make sure to keep the same structure. Changing this could give you some problems.


### Basic

A simple example with 3 columns in a row. The columns will be next to each other on a tablet and bigger, but fall under each other on a mobile device.

```html
	<div class="row">
		<div class="column small-full medium-third">
		<div class="column small-full medium-third">
		<div class="column small-full medium-third">
	</div>
```


### Centered

You have two columns, which have both 1/3 width. These columns by default will be aligned on the left (start) of the row. 

```html
	<div class="row">
		<div class="column small-full medium-third">
		<div class="column small-full medium-third">
	</div>
```

But you can easily center them with a `center` class on the row.


```html
	<div class="row center">
		<div class="column small-full medium-third">
		<div class="column small-full medium-third">
	</div>
```

### Long lists of columns

If you have a long list of columns and you don't want to add all classes on every column. You can also add these classes on the row. These will be applied automatically to all its first children. In that case the columns only will need a `column` class.


```html
	<div class="row small-full medium-third">
		<div class="column">
		<div class="column">
		<div class="column">
		<div class="column">
		<div class="column">
		...
</div>
```

If you want to overrule the given styling on one specific column. You can just add the classes on the column itself. 

```html
	<div class="row small-full medium-third">
		<div class="column">
		<div class="column">
		<div class="column">
		<div class="column medium-two-third">
		<div class="column">
		...
	</div>
```



