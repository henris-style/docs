# Parent

## parent

Select the parent of a selector. 

```scss
body{
	.element{
		@include parent(){
			background-color: red; 
		}
	}
}

// body{  background-color: red; }

```