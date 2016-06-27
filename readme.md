# K-SASS-CORE 

If you use Sass in your development workflow, you know the importance of mixins. When you see some things that are written repeatedly and tediously in CSS, that’s where mixins can help you prevent repetitive work. A mixin contains CSS declarations that you can reuse throughout your site.

There are many mixins are made by developers, to help you when working with Sass in your development. Most cover things that often repetitive in CSS. From adapting across multiple browsers to creating buttons, animations and transition effects, find this and more in the following K-SASS-CORE mixin libraries you should get for your Sass development.

![k-SASS-CORE](https://github.com/baonguyenyam/k-sass-core/blob/master/dist/images/img_01.png "k-SASS-CORE")


* BN-SASS-CORE change name to K-SASS-CORE 
* BN-SASS-CORE v2.0.3
* BN-SASS-CORE is just a library.
* BN-SASS-CORE requires NODE-SASS. If your OS is older, this version may not compile.
* http://baonguyenyam.github.io
* Copyright 2016 by Bao Nguyen.
* MIT License

===============================

***SASS type:***

```sass
+pos(null, 1rem null 3rem_)
```

***Compile to:***

```css
position: initial;
top: 1rem;
bottom: 3rem !important;
```
===============================

***SASS type:***

```sass
+mar(2rem_ "0 !important" 3rem_ 0)
```

***Compile to:***

```css
margin-top: 2rem !important;
margin-right: 0 !important;
margin-bottom: 3rem !important;
margin-left: 0;
```
===============================

***SASS type:***

```sass
+bor(null, dashed color(main), 5px 4px_)
```

***Compile to:***

```css
border-top: dashed #795d9c 5px;
border-right: dashed #795d9c 4px !important;
border-bottom: dashed #795d9c 5px;
border-left: dashed #795d9c 4px !important;
```
===============================

***SASS type:***

```sass
+bor(left, null, calc(100% - 3rem))
```

***Compile to:***

```css
border-left: solid transparent calc(100% - 3rem);
```
===============================

***SASS type:***

```sass
+bor-rad(7px_ '30%_' null 20px)
```

***Compile to:***

```css
border-top-radius: 7px !important;
border-right-radius: 30% !important;
border-left-radius: 20px;
```
===============================

***SASS type:***

```sass
color: color(main)
background: color-rgba(color(link),.6)
```

***Compile to:***

```css
color: #795d9c;
background: rgba(96, 125, 139, 0.6);
```
===============================

***SASS type:***

```sass
color: color-rgba(color-up(color(main), 2%),.3)
background: color-down(color-rgba(color(link),.6),20%)
```

***Compile to:***

```css
color: rgba(255, 255, 255, 0.3);
background: #cccccc;
```
===============================

***SASS type:***

```sass
+background-gradient(color(main), color(link))
```

***Compile to:***

```css
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


## Mixins available:

<table>
 <tr>
   <th>Mixins</th>
   <th>Arguments (with default values)</th>
 </tr>
 
 <tr>
   <td>bn-prefix</td>
   <td>Will add browser specific prefixes to supplied property (and will set it to supplied value)</td>
 </tr>
 <tr>
   <td>background-gradient</td>
   <td>Start Color: #3C3C3C, End Color: #999999</td>
 </tr>
 <tr>
   <td>background-horizontal</td>
   <td>Start Color: #3C3C3C, End Color: #999999</td>
 </tr>
 <tr>
   <td>background-radial</td>
   <td>Start Color: #FFFFFF, Start position: 0%, End Color: #000000, End position: 100%</td>
 </tr>
  <tr>
   <td>background-size</td>
   <td>Width: 100%, Height: 100%</td>
 </tr>
 <tr>
   <td>background-opacity</td>
   <td>Color: #000, Opacity: .85</td>
 </tr>
 <tr>
   <td>border-radius</td>
   <td>Radius: 5px</td>
 </tr>
 <tr>
   <td>border-radius-separate</td>
   <td>Top Left: 5px, Top Right: 5px, Bottom Left: 5px, Bottom Right: 5px</td>
 </tr>
 <tr>
   <td>box</td>
   <td>Orientation: horizontal, Pack: center, Align: center</td>
 </tr>
 <tr>
   <td>box-rgba</td>
   <td>R: 60, G: 3, B: 12, Opacity: 0.23, Color: #3C3C3C</td>
 </tr>
 <tr>
   <td>box-shadow</td>
   <td>X: 2px, Y: 2px, Blur: 5px, Color: rgba(0,0,0,.4)</td>
 </tr>
 <tr>
   <td>box-sizing</td>
   <td>Type: border-box</td>
 </tr>
 <tr>
   <td>columns</td>
   <td>Count: 3, Gap: 10</td>
 </tr>
 <tr>
   <td>double-borders</td>
   <td>Color One: #3C3C3C, Color Two: #999999, Radius: 0</td>
 </tr>
 <tr>
   <td>flex</td>
   <td>Value: 1</td>
 </tr>
 <tr>
   <td>flip</td>
   <td>Value: ScaleX: -1</td>
 </tr>
 <tr>
   <td>font-face</td>
   <td>Value: Font Family: myFont, Eot File Src: myFont.eot, Woff File Src: myFont.woff, Ttf File Src: myFont.ttf</td>
 </tr>
 <tr>
   <td>opacity</td>
   <td>Opacity: 0.5</td>
 </tr>
 <tr>
   <td>outline-radius</td>
   <td>Radius: 5px</td>
 </tr>
 <tr>
   <td>resize</td>
   <td>Direction: both</td>
 </tr>
 <tr>
   <td>rotate</td>
   <td>Degree: 0, M11: 0, M12: 0, M21: 0, M22: 0</td>
 </tr>
 <tr>
   <td>text-shadow</td>
   <td>X: 2px, Y: 2px, Blur: 5px, Color: rgba(0,0,0,.4)</td>
 </tr>
 <tr>
   <td>transform</td>
   <td>Parameters: null</td>
 </tr>
 <tr>
   <td>transform-style</td>
   <td>Style: preserve-3d</td>
 </tr>
 <tr>
   <td>transition</td>
   <td>What: all, Length: 1s, Easing: ease-in-out</td>
 </tr>
 <tr>
   <td>triple-borders</td>
   <td>Color One: #3C3C3C, Color Two: #999999, Color Three: #000000, Radius: 0</td>
 </tr>
 <tr>
   <td>keyframes</td>
   <td>Animation name - pass animation css as body</td>
 </tr>
 <tr>
   <td>animation</td>
   <td>name duration timing-function delay iteration-count direction fill-mode play-state (http://www.w3schools.com/cssref/css3_pr_animation.asp)</td>
 </tr>
</table>

## Examples and Instructions

```sass
   // Call Mixins
   +opacity()
   +border-radius(3px)
   +transition(color, .5s, ease-in)
```

## Changelog

* Initial Release
* Beta Release

## Licence

Copyright &copy; 2016 Bao Nguyen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

#### Bảo Nguyên
