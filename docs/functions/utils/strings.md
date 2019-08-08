# Strings

## str-split

Split a string by a given string into a list.

```scss

$string: 'Henri Matisse, was a French painter from Nice';

$list: str-split($string, ','); 

// returns ('Henri Matisse', 'was a French painter from Nice');

```

## str-splice (alias for str-split)

Split a string by a given string into a list.

## str-replace

Replace a certain string by another string in a string.

```scss

$string: 'Henri Matisse, was a French painter from Nice';
$list: str-replace($string, 'Nice', 'Paris'); 

// 'Henri Matisse, was a French painter from Paris';

```

```scss

$string: 'Henri Matisse, was a French painter from Nice';
$needles: ('Henri', 'Nice');
$replacers: ('Henk', 'Paris');

$list: str-replace($string, $needles, $replacers); 

// 'Henk Matisse, was a French painter from Paris';

```

## str-replace-func

The actual replacing function used in str-replace, only accepts strings. 

```scss

$string: 'Henri Matisse, was a French painter from Nice';
$list: str-replace($string, 'Nice', 'Paris'); 

// 'Henri Matisse, was a French painter from Paris';

```

## to-str

Convert a value to a string.

## str-contains

Check if the given string contains another string

## dasherize

Convert a string which can be used as slug

## underscore

Convert a string and remove special characters. Replace spaces with underscores.

## letter-uppercase

Uppercase one letter in a string, by default the first one.

## letter-lowercase

Lowercase one letter in a string, by default the first one.

## PascalCase

convert any string to PascalCase

## camelCase

convert any string to camelCase

## trim

Removes spaces in the beginning of a string.