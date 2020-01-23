## if-else

Remove the first character from a string.

| Argument | Description  |
| -------- | ------------ |
| if       | Input string |
| else     | Input string |

### example

```scss
$value1: false;
$value2: 'test2'


$string: if-else($value1,$value2);

// output: 'test2'
```

```scss
$value1: 'test1';
$value2: 'test2'


$string: if-else($value1,$value2);

// output: 'test1'
```

```scss
$value1: true;
$value2: 'test2'


$string: if-else($value1,$value2);

// output: true
```
