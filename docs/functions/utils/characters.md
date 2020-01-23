# Characters

## add-length

Get a string and add extra spaces to make the string longer.
Usefull in debugging and making all strings the same length.

| Argument | Description             |
| -------- | ----------------------- |
| string   | The input string        |
| length   | New total string length |

example:

```scss
@debug '| #{add-length('',20)} |';
@debug '| #{add-length('Henris',20)} |';
@debug '| #{add-length('The Sass Toolbelt\'s,20)} |';

/*
|                     |
| Henris              |
| The Sass Toolbelt   |
|                     |
*/
```

## add-zeros

Add extra zeros to a number. When you want to create classes with 01, 003 or something equivalent

| Argument | Description                                                                    |
| -------- | ------------------------------------------------------------------------------ |
| number   | The input number                                                               |
| total    | Total characters the new number will get. It will automatically add the zeros. |

example:

```scss
add-zeros(1,3);

// 001

```

## add-character

Create a string with given character times a given amount of times

| Argument | Description                             |
| -------- | --------------------------------------- |
| string   | The input string                        |
| length   | Amount time the string will be repeated |

example:

```scss
@debug '| #{add-character('-',20)} |';
@debug '| #{add-length('',20)} |';
@debug '| #{add-length('Henris',20)} |';
@debug '| #{add-length('The Sass Toolbelt\'s,20)} |';
@debug '| #{add-character('-',20)} |';

/*
| -------------------- |
|                      |
| Henris               |
| The Sass Toolbelt    |
|                      |
| -------------------- |
*/
```

## safe-characters

Convert special characters in strings to their simple equivalent to filter with characters.

| Argument | Description      |
| -------- | ---------------- |
| string   | The input string |

example:

```scss
$string: safe-characters("The quïck brown föx jumps over thé lazy døg");

// 'The quick brown fox jumps over the lazy dog'
```

## character-set

Function which returns a list of characters of a certain type

| Argument   | Description                              |
| ---------- | ---------------------------------------- |
| characters | Type of characters you want to get back. |

| Option | Value                                                |
| ------ | ---------------------------------------------------- |
| a-z    | abcdefghijklmnopqrstuvwxyz                           |
| A-Z    | ABCDEFGHIJKLMNOPQRSTUVWXYZ                           |
| a-Z    | abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ |
| 0-9    | 01234556789                                          |

## allowed-characters

Filters out all characters which arent allowed.

```scss
$string: allowed-characters(
	"The quïck brown föx jumps over thé lazy døg",
	character-set("a-z")
);

// hequckbrownfxjumpsoverthlazydg

// Filters out spaces and special characters, because those are not in a-z list.
```

## nth-character

Get the character on a certain index of the string.

| Argument | Description       |
| -------- | ----------------- |
| str      | Input string      |
| nth      | Index to be found |

```scss
$string: nth-character("Helvetica", 3);

// l
```

## first-character

Get the first character of a string.

| Argument | Description  |
| -------- | ------------ |
| str      | Input string |

```scss
$string: first-character("Helvetica");

// H
```

## last-character

Get the last character of a string.

| Argument | Description  |
| -------- | ------------ |
| str      | Input string |

```scss
$string: last-character("Helvetica");

// a
```

## remove-character

Remove a certain character by index from a string.

| Argument | Description         |
| -------- | ------------------- |
| str      | Input string        |
| index    | Index to be removed |

```scss
$string: remove-character("Helvetica", 3);

// Hevetica
```

## remove-first-character

Remove the first character from a string.

| Argument | Description  |
| -------- | ------------ |
| str      | Input string |

```scss
$string: remove-first-character("Helvetica");

// elvetica
```

## remove-last-character

Remove the first character from a string.

| Argument | Description  |
| -------- | ------------ |
| str      | Input string |

```scss
$string: remove-last-character("Helvetica");

// Helvetic
```
