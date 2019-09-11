# Min & Max Grid

Font-sizes are a good example to use in grid sizes (vw), but they could also get too small or too big. Thats a problem which is easy solvable with media queries, but you don't want it to just jump to another font-size while resizing your screen. Thats where the `min-` and `max-` mixins come in.


### Examples

#### Basic Example

```html
<h1>The quick brown fox jumps over the lazy dog</h1>
```
```scss
h1 { font-size: grid(1); }
```

This will result in an element like this:

<div class="html-example" note="Resize the window to see">
<h1 class="test-1">The quick brown fox jumps over the lazy dog</h1>
<style>.test-1{ font-size: calc(100vw/24); }</style>
</div>

But you don't want the title to scale down all the way. You want it to stay at a minimum of `36px`.

```html
<h1>The quick brown fox jumps over the lazy dog</h1>
```
```scss
h1 { 
	font-size: grid(1); 
	@include min-(font-size,1,36px);
}
```

This will result in an element like this:

<div class="html-example" note="Resize the window to see">
<h1 class="test-2">The quick brown fox jumps over the lazy dog</h1>
<style>
	.test-2{ font-size: calc(100vw/24); } 
	@media only screen and (max-width: 864px){ 
	 .test-2{	
		 	font-size: 64px; 
		}
	}
</style>
</div>

#### Advanced Example

Lets make it red at the same time as it jumps over to the set `36px`;

```html
<h1>The quick brown fox jumps over the lazy dog</h1>
```
```scss
h1 { 
	padding: 1rem;
	font-size: grid(.75); 
	@include min-(font-size,1,36px){
		background-color: #FE688E; // red
	}
	@include max-(font-size,1,96px){
		background-color: #65CCFA; // blue
	}
}
```

This will result in an element like this:

<div class="html-example" note="Resize the window to see">
<h1 class="test-3">The quick brown fox jumps over the lazy dog</h1>
<style>
	.test-3{ padding: 1rem; font-size: calc(100vw/24); } 
	@media only screen and (max-width: 864px){ 
	 .test-3{	
			 font-size: 64px; 
			 background-color: #FE688E;
		}
	}@media only screen and (min-width: 2304px){ 
	 .test-3{	
			 font-size: 96px; 
			 background-color: #65CCFA;
		}
	}
</style>
</div>

### The Mixin


| Mixin | Arguments                                         | Description                                                                                                                        |
| ----- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| min-  | [`$property` (optional), `$grid`, `$min-size`] | Calculate on which viewport width grid size will be equal to the min-size and create a media-query with a min width based on this. |
| max-  | [`$property` (optional), `$grid`, `$min-size`]   | Calculate on which viewport width grid size will be equal to the min-size and create a media-query with a max width based on this. |


### Other usage

The element can be used with any property and also without any property. In some cases you just want to add another color on a specific point or set a different content on a breakpoint. 

In that case you can use the mixins also without the property and just use the content. 

```html
<h1></h1>
```
```scss
h1 { 
	padding: 1rem;
	&::before{
		content: "This is the normal size";
	}
	@include min-(1,36px){
		background-color: #770D8D // purple; 
		&::before{ content: "I am on a small screen now"; }
	}
	@include max-(font-size,1,96px){
		background-color: #B8D3A5; // green 
		&::before{ content: "Now your window is big"; }
	}
	
}
```

This will result in an element like this:

<div class="html-example" note="Resize the window to see">
<h1 class="test-4"></h1>
<style>
	.test-4{
		padding: 1rem;
	}
	.test-4::before{
		content: "This is the normal size";
	}
	@media only screen and (max-width: 864px){ 
	 .test-4{	
			background-color: #770D8D;
		} 
		.test-4::before{	
			content: "I am on a small screen now";
		}
	}@media only screen and (min-width: 2304px){ 
	 .test-4{
			background-color: #B8D3A5;
		}
	 .test-4::before{	
			content: "Now your window is big"; 
		}
	}
</style>
</div>