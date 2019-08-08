# List

## prepend

Add a value to the beginning a list. 

```scss

$list: ('potato', 'cucumber', 'banana');

$newList: prepend($list,'tomato');

// ('tomato','potato', 'cucumber', 'banana');

```


## str-to-list

Convert a string to list and breaks the string by the separator

```scss

$str: 'potato cucumber banana';

$list: str-to-list($list,' ');

// ('potato', 'cucumber', 'banana');

```


## to-string

Converts a string to a list with the glue. 

takes nested lists aswell.

```scss

$list: ('potato', 'cucumber', 'banana');

$string: to-string('tomato',' ');

// 'potato cucumber banana'

```



## list-length

Returns the length of a list


```scss

$list: ('potato', 'cucumber', 'banana');

$length: list-length($list);

// 3

```

## to-letter-list

Converts a string to list of letters.


```scss

$string: 'potato';

$list: to-letter-list($string);

// ('p','o','t','a','t','o')

```

## shortest

Takes two values (either strings or lists) and returns the shortest value.



```scss

$list1: ('potato', 'cucumber', 'banana');
$list2: ('apple', 'kiwi');

$shortest: shortest($list1,$list2);

//  ('apple', 'kiwi')

```


```scss

$string1: 'potato';
$string2: 'cucumber';

$shortest: shortest($string1,$string2);

//  'potato'

```


## list-contains

Check if a list contains a value.


```scss

$list: ('potato', 'cucumber', 'banana');

$contains: list-contains($list, 'banana'); // returns true
$contains: list-contains($list, 'kiwi'); 

// false

```


## remove-nth

Remove a specific key from a list

```scss

$list: ('potato', 'cucumber', 'banana');

$newlist: remove-nth($list, 2); 

// ('potato', 'cucumber');

```

## insert-nth

Insert an item at a specific index

```scss

$list: ('potato', 'cucumber', 'banana');

$newlist: insert-nth($list, 2, 'kiwi'); 

// ('potato', 'cucumber', 'kiwi', 'banana');

```

## key-index

Gets the index of an item in a list.

```scss

$list: ('potato', 'cucumber', 'kiwi');

$index: key-index($list, 'kiwi'); 

// 2

```