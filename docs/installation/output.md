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


| name | default value |
| ---- | ------------- |
 | css |  false | 
 | full |  false | 
 | debug |  true | 
 | debug-image-alt |  true | 
 | debug-input-type |  true | 
 | debug-target-blank |  true | 
 | debug-summary-first |  true | 
 | debug-legend-first |  true | 
 | debug-abbr-title |  true | 
 | debug-javascript-link |  true | 
 | debug-detail-list-children |  true | 
 | debug-figcaption |  true | 
 | debug-div |  true | 
 | debug-list |  true | 
 | debug-bad-compute |  true | 
 | background-colors |  true | 
 | text-colors |  true | 
 | custom-properties |  true | 
 | ease-classes |  false | 
 | button |  false | 
 | button-default |  true | 
 | button-colors |  true | 
 | button-sizes |  true | 
 | button-rounded |  true | 
 | button-round |  true | 
 | button-icons |  true | 
 | button-text-transform |  true | 
 | button-rotated |  true | 
 | button-border |  true | 
 | custom-properties-media-queries |  false | 
 | custom-properties-color |  false | 
 | grid |  true | 
 | grid-only |  false | 
 | grid-helpers |  false | 
 | grid-hide-show-classes |  true | 
 | grid-only-classes |  false | 
 | grid-counted-columns |  true | 
 | grid-column |  true | 
 | grid-parts |  true | 
 | grid-offset |  false | 
 | grid-push |  false | 
 | grid-pull |  false | 
 | grid-non-breaking-column |  false | 
 | grid-columns |  true | 
 | grid-cssgrid |  false | 
 | grid-row-breakpoints |  true | 
 | grid-mq-custom-properties |  false | 
 | grid-no-mq-classes |  false | 
 | grid-mq-small |  true | 
 | grid-mq-medium |  true | 
 | grid-mq-large |  true | 
 | grid-mq-xlarge |  true | 
 | grid-mq-xxlarge |  false | 
 | components |  true | 
 | blockquote |  false | 
 | button-group |  false | 
 | card |  false | 
 | code |  false | 
 | code-prism |  false | 
 | color |  true | 
 | color-background-colors |  true | 
 | color-text-colors |  true | 
 | content |  true | 
 | content-link-filetypes |  false | 
 | content-p-notices |  false | 
 | content-list |  true | 
 | content-line-height |  true | 
 | content-row-example |  false | 
 | content-hr |  true | 
 | content-default-link |  true | 
 | content-detail-list |  false | 
 | data-label |  false | 
 | detail-list |  false | 
 | ease |  true | 
 | form |  false | 
 | form-fieldset |  true | 
 | form-form |  true | 
 | form-button |  true | 
 | form-input-text |  true | 
 | form-check-color |  false | 
 | form-check-icon |  false | 
 | form-check-text |  false | 
 | form-checkbox |  true | 
 | form-hidden |  true | 
 | form-radio |  true | 
 | form-range |  true | 
 | form-switch |  true | 
 | form-input |  true | 
 | form-input-colored |  false | 
 | form-textarea |  true | 
 | form-select |  true | 
 | form-label |  true | 
 | form-field |  true | 
 | helpers |  true | 
 | reset |  true | 
 | reset-meyerweb |  true | 
 | reset-extra |  true | 
 | horizontal-rule |  true | 
 | icon |  true | 
 | icons-specific |  false | 
 | print |  true | 
 | navigation |  false | 
 | section |  true | 
 | showmore |  false | 
 | spacing |  true | 
 | table |  false | 
 | typography |  true | 
 | typography-base |  true | 
 | typography-headings |  true | 
 | typography-margins |  true | 
 | typography-usage |  true | 
 | typography-weight-classes |  false | 
 | pattern |  false | 
 | pattern-checkered |  true | 
 | pattern-cubes |  true | 
 | pattern-dots |  true | 
 | pattern-houndstooth |  true | 
 | pattern-lines |  true | 
 | pattern-zigzag |  true
