# K-SASS-CORE 
* BN-SASS-CORE v2.0.3
* BN-SASS-CORE is just a library.
* BN-SASS-CORE requires NODE-SASS. If your OS is older, this version may not compile.
* http://baonguyenyam.github.io
* Copyright 2016 by Bao Nguyen.
* MIT License

===============================

***SASS type:***

```+pos(null, 1rem null 3rem_)```

***Compile to:***

```
position: initial;
top: 1rem;
bottom: 3rem !important;
```
===============================

***SASS type:***

```+mar(2rem_ "0 !important" 3rem_ 0)```

***Compile to:***

```
margin-top: 2rem !important;
margin-right: 0 !important;
margin-bottom: 3rem !important;
margin-left: 0;
```
===============================

***SASS type:***

```+bor(null, dashed color(main), 5px 4px_)```

***Compile to:***

```
border-top: dashed #795d9c 5px;
border-right: dashed #795d9c 4px !important;
border-bottom: dashed #795d9c 5px;
border-left: dashed #795d9c 4px !important;
```
===============================

***SASS type:***

```+bor(left, null, calc(100% - 3rem))```

***Compile to:***

```
border-left: solid transparent calc(100% - 3rem);
```
===============================

***SASS type:***

```+bor-rad(7px_ '30%_' null 20px)```

***Compile to:***

```
border-top-radius: 7px !important;
border-right-radius: 30% !important;
border-left-radius: 20px;
```
===============================

***SASS type:***

```
color: color(main)
background: color-rgba(color(link),.6)
```

***Compile to:***

```
color: #795d9c;
background: rgba(96, 125, 139, 0.6);
```
===============================

***SASS type:***

```
color: color-rgba(color-up(color(main), 2%),.3)
background: color-down(color-rgba(color(link),.6),20%)
```

***Compile to:***

```
color: rgba(255, 255, 255, 0.3);
background: #cccccc;
```
===============================

***SASS type:***

```+background-gradient(color(main), color(link))```

***Compile to:***

```
background-color: #795d9c;
background-image: -webkit-gradient(left top, left bottom, color-stop(0%, #795d9c), color-stop(100%, #607d8b));
background-image: -webkit-linear-gradient(top, #795d9c 0%, #607d8b 100%);
background-image: linear-gradient(to bottom, #795d9c 0%, #607d8b 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#795d9c', endColorstr='#607d8b', GradientType=0 );
```

And more...

##Sass Functions Cheat Sheet

1. [RGB Functions](#rgb-functions)
1. [HSL Functions](#hsl-functions)
1. [Opacity Functions](#opacity-functions)
1. [Other Color Functions](#other-color-functions)
1. [List Functions](#list-functions)
1. [Map Functions](#map-functions)
1. [Selector Functions](#selector-functions)
1. [String Functions](#string-functions)
1. [Number Functions](#number-functions)
1. [Introspection Functions](#introspection-functions)
1. [Miscel­laneous Functions](#miscellaneous-functions)

####RGB Functions

[**`rgb(­$red, $green, $blue)`**](http://sass-lang.com/documentation/Sass/Script/Functions.html#rgb-instance_method)
Creates a color from red, green, and blue values.

**`rgba­($red, $green, $blue, $alpha)`**
Creates a color from red, green, blue, and alpha values.

**`red(­$co­lor)`**
Gets the red component of a color.

**`gree­n($­col­or)`**
Gets the green component of a color.

**`blue­($c­olor)`**
Gets the blue component of a color.

**`mix(­$co­lor1, $color2, [$weig­ht])`**
Mixes two colors together.

==========
####HSL Functions

**`hsl(­$hue, $satur­ation, $light­ness)`**
Creates a color from hue, satura­tion, and lightness values.

**`hsla­($hue, $satur­ation, $light­ness, $alpha)`**
Creates a color from hue, satura­tion, lightness, and alpha values.

**`hue(­$co­lor)`**
Gets the hue component of a color.

**`satu­rat­ion­($c­olor)`**
Gets the saturation component of a color.

**`ligh­tne­ss(­$co­lor)`**
Gets the lightness component of a color.

**`adju­st-­hue­($c­olor, $degre­es)`**
Changes the hue of a color.

**`ligh­ten­($c­olor, $amount)`**
Makes a color lighter.

**`dark­en(­$color, $amount)`**
Makes a color darker.

**`satu­rat­e($­color, $amount)`**
Makes a color more saturated.

**`desa­tur­ate­($c­olor, $amount)`**
Makes a color less saturated.

**`gray­sca­le(­$co­lor)`**
Converts a color to grayscale.

**`comp­lem­ent­($c­olor)`**
Returns the complement of a color.

**`inve­rt(­$co­lor)`**
Returns the inverse of a color.

==========
####Opacity Functions

**`alph­a($­color) / opacit­y($­col­or)`**
Gets the alpha component (opacity) of a color.

**`rgba­($c­olor, $alpha)`**
Changes the alpha component for a color.

**`opac­ify­($c­olor, $amount) / fade-i­n($­color, $amount)`**
Makes a color more opaque.

**`tran­spa­ren­tiz­e($­color, $amount) / fade-o­ut(­$color, $amount)`**
Makes a color more transp­arent.

==========
####Other Color Functions

Visit [Sass Functions](http://sass-lang.com/documentation/Sass/Script/Functions.html).

==========
####List Functions

Visit [Sass Functions](http://sass-lang.com/documentation/Sass/Script/Functions.html).

==========
####Map Functions

Visit [Sass Functions](http://sass-lang.com/documentation/Sass/Script/Functions.html).

==========
####Selector Functions

**`sele­cto­r-n­est­($s­ele­cto­rs...)`**
Nests selector beneath one another like they would be nested in the styles­heet.

**`sele­cto­r-r­epl­ace­($s­ele­ctor, $original, $repla­cem­ent)`**
Replaces `$original` with `$repla­cement` within `$selector`.

More at [Sass Functions](http://sass-lang.com/documentation/Sass/Script/Functions.html).

==========
####String Functions

**`unqu­ote­($s­tri­ng)`**
Removes quotes from a string.

**`quot­e($­str­ing)`**
Adds quotes to a string.

**`str-­len­gth­($s­tri­ng)`**
Returns the number of characters in a string.

More at [Sass Functions](http://sass-lang.com/documentation/Sass/Script/Functions.html).

==========
####Number Functions

**`perc­ent­age­($n­umb­er)`**
Converts a unitless number to a percen­tage.

**`roun­d($­num­ber)`**
Rounds a number to the nearest whole number.

**`ceil­($n­umb­er)`**
Rounds a number up to the next whole number.

**`floo­r($­num­ber)`**
Rounds a number down to the previous whole number.

**`abs(­$nu­mber)`**
Returns the absolute value of a number.

**`min(­$nu­mbe­rs...)`**
Finds the minimum of several numbers.

**`max(­$nu­mbe­rs...)`**
Finds the maximum of several numbers.

**`rand­om(­[$l­imi­t])`**
Returns a random number.

==========
####Introspection Functions

**`feat­ure­-ex­ist­s($­fea­ture)`**
Returns whether a feature exists in the current Sass runtime.

**`vari­abl­e-e­xis­ts(­$na­me)`**
Returns whether a variable with the given name exists in the current scope.

**`glob­al-­var­iab­le-­exi­sts­($n­ame)`**
Returns whether a variable with the given name exists in the global scope.

**`func­tio­n-e­xis­ts(­$na­me)`**
Returns whether a function with the given name exists.

**`mixi­n-e­xis­ts(­$na­me)`**
Returns whether a mixin with the given name exists.

**`insp­ect­($v­alue)`**
Returns the string repres­ent­ation of a value as it would be repres­ented in Sass.

**`type­-of­($v­alue)`**
Returns the type of a value.

**`unit­($n­umb­er)`**
Returns the unit(s) associated with a number.

**`unit­les­s($­num­ber)`**
Returns whether a number has units.

**`comp­ara­ble­($n­umber1, $numbe­r2)`**
Returns whether two numbers can be added, subtra­cted, or compared.

**`call­($name, $args…)`**
Dynami­cally calls a Sass function.

==========
####Miscel­laneous Functions

**`if($­con­dition, $if-true, $if-fa­lse)`**
Returns one of two values, depending on whether or not `$condition` is true.

**`uniq­ue-­id()`**
Returns a unique CSS identi­fier.

#### Bảo Nguyên
