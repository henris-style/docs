
# Tips

Keep a few rules in mind, this will keep you away from a lot of debugging:


## Mobile first 

Work from small to large (mobile first), also in the classes. 
	
For instance:
	
__Good:__

```css
	<div class="column small-full large-half xlarge-third">
		...
	</div>
```	

__Bad:__


```css
	<div class="xlarge-third large-half small-full column">
		...
	</div>
```	

## Named classes

Try to use named classes as much as possible. When changing up your total grid size, everything which is named will still work. If you use the numbered once, stuff might break.

__Good:__

```css
	<div class="column small-full large-half">
		...
	</div>
```	

__Bad:__

```css
	<div class="column small-full large-12">
		...
	</div>
```	

The case above, will give the same results based on the default grid of 24 columns. But if you would change this up to for instance 12. That would mean that a column which should be half, will now be full. 

