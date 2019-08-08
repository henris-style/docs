# Settings

Henri's comes with a some default settings. These settings are used all through the framework.


### Base settings
<as-table file="https://raw.githubusercontent.com/MatiseAms/henris/develop/data/base.json" get="base" />

### Form settings
<as-table file="https://raw.githubusercontent.com/MatiseAms/henris/develop/data/forms.json" get="form" />

### Grid settings
<as-table file="https://raw.githubusercontent.com/MatiseAms/henris/develop/data/grid.json" get="grid" />

### Button settings
<as-table file="https://raw.githubusercontent.com/MatiseAms/henris/develop/data/button.json" get="button" />

## prefix

The prefix is used as a prefix for all classes which Henri's will output. By default the prefix is empty and thus won't display. 


## grid-prefix

The grid-prefix is used as a prefix only grid classes. This so you can use Henri's in combination with other frameworks without class conflicts. 

## border-radius

The border radius is applied to multiple other components, but you can also just use it as a variable all through your project. 

## space

Every projects has a default spacing, this can be set with this variable and is also used in multiple components. 

## font-size

The body font-size is the most important set value in het project. This because all `rem` values will be depending on this value. 

## font-path

The font-path is used when including the fonts. This can be overriden in settings. As described in 
[typography](/doc/typography)

## image-path

A variable set to use in your project.

## cubic-bezier

The default cubic bezier, which you can use in the transition, animations etc. Edit this to give your project it's own feel. 

## box-shadow

A default box shadow which is being applied on multiple components. Can be used as a variable or just set to none. 
