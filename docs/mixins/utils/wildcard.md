# Wildcard

## wildcard

Selects all elements which are, or start with a certain string.

```scss

.list li {
	&::before{
		content: "❌"
	}
	@include wildcard('item'){
		&::before{
			content: 😀;
		}
	};
}

```

```html
<ul class="list">
	<li class="item">.item</li>
	<li class="test-item">.test-item</li>
	<li class="items">.items</li>
	<li class="item-another">.item-another</li>
	<li class="not-an-item">.not-an-item</li>
	<li class="not-an-it-em">.not-an-it-em</li>
</ul>
```

<style>
.list li::before{
	content: "❌"
}
.list li[class^="item"]::before,
.list li[class*=" item"]::before {
	content: "😀"
}
</style>

<ul class="list">
	<li class="item">.item</li>
	<li class="test-item">.test-item</li>
	<li class="items">.items</li>
	<li class="item-another">.item-another</li>
	<li class="not-an-item">.not-an-item</li>
	<li class="not-an-it-em">.not-an-it-em</li>
</ul>