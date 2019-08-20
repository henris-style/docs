# Contra

### The function

Contra returns the opposite color of a given value. 

For instance, you create a list with colors. The background will get the colors of the list and
the text will get the color which suits best.

```scss

.element{
	@each $color-name, $color-value in $colors{
		&--#{to-lower-case($color-name)}{
			background-color: $color-value;
			color: contra($color-value);
		}	
	}
}
```
| Argument    | Default | Description                                                              |
| ----------- | ------- | ------------------------------------------------------------------------ |
| `$value`    |         | The input color to be checked for lightness                              |
| `$opacity`  | `1`     | Returned opacity of the color                                            |
| `$colors`   | `null`  | A map with a alternate black and white color can be given                |
| `$contrast` | `57.5`  | Contrast used to determine whether black or white should be passed back. |


### $colors

If you want to return an alternate black or white color (the black and white defined in the $colors are default) you can pass a list with colors. 

```scss

.element{
	@each $color-name, $color-value in $colors{
		&--#{to-lower-case($color-name)}{
			background-color: $color-value;
			color: contra($color-value, 1, ('red', 'green'));
		}	
	}
}
```