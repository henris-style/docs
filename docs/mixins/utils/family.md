# Family

| Mixin                | Description                                                                                                                                               |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `first`              | Select all children from the first to `$num`.                                                                                                             |
| `first-child`        | Select all children from the first to `$num`. default: 1                                                                                                  |
| `last`               | Select all children from the last to `$num`.                                                                                                              |
| `last-child`         | Select all children from the last to `$num`. default: 1                                                                                                   |
| `after-first`        | Select all children after the first `$first` to `$num`.                                                                                                   |
| `from-end`           | Select all children before `$num` from the last.                                                                                                          |
| `between`            | Select all children between `$first` and `$last`.                                                                                                         |
| `even-between`       | Select all even children between `$first` and `$last`.                                                                                                    |
| `odd-between`        | Select all odd children between `$first` and `$last`.                                                                                                     |
| `n-between`          | Select all `$num` children between `$first` and `$last`.                                                                                                  |
| `all-but`            | Select all children but `$num`.                                                                                                                           |
| `each`               | Select children each `$num`.                                                                                                                              |
| `every`              | Select children each `$num`.                                                                                                                              |
| `from-first-last`    | Select the `$num` child from the start and the `$num` child from the last.                                                                                |
| `middle`             | Select the item in the middle of `$num` child. Only works with odd number                                                                                 |
| `all-but-first-last` | Select all children between the `$num` first and the `$num` last.                                                                                         |
| `first-of`           | This quantity-query mixin will only select the first of `$limit` items. It will not  work if there is not as much as item as you set in `$limit`.         |
| `last-of`            | This quantity-query mixin will only select the last of `$limit` items. It will not if there is not as much as item as you set in `$limit`.                |
| `at-least`           | This quantity-query mixin will select every items if there is at least `$num` items. It will not  if there is not as much as item as you set in `$num`.   |
| `at-most`            | This quantity-query mixin will select every items if there is at most `$num` items. It will not if there is not as much as item as you set in `$num`.     |
| `in-between`         | This quantity-query mixin will select every items only if there is between `$min` and `$max` items.                                                       |
| `even`               | Select all even children.                                                                                                                                 |
| `odd`                | Select all odd children.                                                                                                                                  |
| `first-last`         | Select only the first and last child.                                                                                                                     |
| `unique`             | Will only select the child if it’s unique.                                                                                                                |
| `only`               | Will only select the child if it’s unique.                                                                                                                |
| `not-unique`         | Will only select children if they are not unique. Meaning if there is at least 2 children, the style is applied.                                          |
| `child-index`        | This mixin is used to automatically sort z-index in numerical order. But it can also sort them in anti-numerical order, depending the parameters you use. |
| `order-index`        | Used by the child-index mixin. It will returned the proper sorted numbers depending on the `$index` value.                                                |