# Output
Henri's offers the option to choose your outputs, by default it outputs **no css at all**.

## Default settings
To get the [default settings](#default-settings) add the following code to your main scss file.

```scss
@import '~henris/custom-output';
$output: set-output(css,true);

@import '~henris';
```

## All settings
If you want to use all Henris settings you can add the following code to your main scss file:
```scss
@import '~henris/custom-output';
$output: set-output(full,true);

@import '~henris';
```


## Customize settings
You can use the same syntax to only add certain settings to your project, you can also add to the default settings by first adding `$output: set-output(css,true);`.

```scss
@import '~henris/custom-output';
$output: set-output(button,true);

@import '~henris';
```

::: tip
NB: You need to add the output settings to your css file **above** the Henris import.
:::

## Default settings
Main settings are displayed as <b class="text--purple">bold and purple</b> and can switch the sub settings on or off at once.  
F.e. if you want to use `button-default` you need to first set `button` to true.


See [installation](/installation) for more information.
