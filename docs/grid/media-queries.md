# Media Queries

Henri's provides a few set media queries which can be used.

| variable        | aka                                    | Description                                                   |
| --------------- | -------------------------------------- | ------------------------------------------------------------- |
| `$small-only`   | `max-width: 750px`                     | Mobile only - Targets small screens only                      |
| `$small-up`     | `min-width: 0px`                       | Minimum Mobile - Targets small screens and up                 |
| `$medium-only`  | `min-width: 750px; max-width: 960px`   | Tablet (Portrait) only - Targets medium screens only          |
| `$medium-up`    | `min-width: 750px`                     | Tablet (Portrait) and up - Targets medium screens and up      |
| `$medium-down`  | `max-width: 960px`                     | Tablet (Portrait) and down - Targets medium screens and down  |
| `$large-only`   | `min-width: 960px; max-width: 1280px`  | Tablet (Landscape) only - Targets large screens only          |
| `$large-up`     | `min-width: 960px`                     | Tablet (Landscape) and up - Targets large screens and up      |
| `$large-down`   | `max-width: 1280px`                    | Tablet (Landscape) and down -  Targets large screens and down |
| `$xlarge-only`  | `min-width: 1280px; max-width: 1920px` | Targets xlarge screens only                                   |
| `$xlarge-up`    | `min-width: 1280px`                    | Targets xlarge screens and up                                 |
| `$xlarge-down`  | `max-width: 1920px`                    | Targets xlarge screens and down                               |
| `$xxlarge-only` | `min-width: 1920px; max-width: 9999px` | * Targets xlarge screens only                                 |
| `$xxlarge-up`   | `min-width: 1920px`                    | * Targets xlarge screens and up                               |
| `$xxlarge-down` | `max-width: 9999px`                    | * Targets xlarge screens and down                             |

* xxlarge is not outputted by default. [Read more about output](/installation/output)


### Usage

You can use it as following;

```scss

  .element{
  	
  	width: 500px; 
  	height: 400px;
  	
  	// For tablets
  	@media #{$medium-only}{
  		width: 100vw; 
  		height: 500px; 
  	}
  	
  	
  	// For mobile screens
  	@media #{$small-only}{
  		width: 100vw; 
  		height: 100vw; 
  	}
  	
	}
	
```

In this case, the element will be by default 500 by 400 pixels. It will be set too 100vw by 500px on Portrait tablets and on mobile it will be square (100vw by 100vw).