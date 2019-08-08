# Maps

## map-collect

Combines maps

```scss

$fruits: ( orange: 'Orange', green: 'Cucumber', yellow: 'Lemon');
$morefruits: ( brown: 'Kiwi', purple: 'Grape');

$allfruits: map-collec($fruits,$morefruits);

// ( orange: 'Orange', green: 'Cucumber', yellow: 'Lemon', brown: 'Kiwi', purple: 'Grape')

```

## map-set

Adds a new value to a map

```scss

$fruits: ( orange: 'Orange', green: 'Cucumber', yellow: 'Lemon');

$newfruits: map-set($fruits,'brown','kiwi'),

// ( orange: 'Orange', green: 'Cucumber', yellow: 'Lemon', brown: 'Kiwi')

```

## to-map

Converts a list to a map