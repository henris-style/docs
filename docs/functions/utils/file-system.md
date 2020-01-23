## fs-join

Join multiple strings into a correct Path

| Argument | Description            |
| -------- | ---------------------- |
| strings  | Input multiple strings |

### example

```scss
$path: fs-join("first/part", "of/thepath");
// output: 'first/part/of/thepath'

$path: fs-join("first/part", "/of/thepath");
// output: 'first/part/of/thepath'

$path: fs-join("first/part/", "of/thepath");
// output: 'first/part/of/thepath'

$path: fs-join("/first/part", "of/thepath");
// output: '/first/part/of/thepath'

$path: fs-join("/first/part/", "/of/thepath");
// output: '/first/part/of/thepath'

$path: fs-join("/first/part", "of/thepath", "and/some", "more");
// output: '/first/part/of/thepath/and/some/more'
```
