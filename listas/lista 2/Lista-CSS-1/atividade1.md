# Atividade 1 - CSS Diner

## Nível 1

```html
<div class="table">
  <plate/>
  <plate/>
</div>
```

```css
plate {
}
```

## Nível 2

```html
<div class="table">
  <bento/>
  <plate/>
  <bento/>
</div>
```

```css
bento {
}
```

## Nível 3

```html
<div class="table">
  <plate id="fancy"/>
  <plate/>
  <bento/>
</div>
```

```css
#fancy {
}
```

## Nível 4

```html
<div class="table">
  <bento/>
  <plate>
    <apple/>
  </plate>
  <apple/>
</div>
```

```css
plate apple {
}
```

## Nível 5

```html
<div class="table">
  <bento>
  <orange/>
  </bento>
  <plate id="fancy">
    <pickle/>
  </plate>
  <plate>
    <pickle/>
  </plate>
</div>
```

```css
#fancy pickle {
}
```

## Nível 6

```html
<div class="table">
  <apple/>
  <apple class="small"/>
  <plate>
    <apple class="small"/>
  </plate>
  <plate/>
</div>
```

```css
.small {
}
```

## Nível 7

```html
<div class="table">
  <apple/>
  <apple class="small"/>
  <bento>
    <orange class="small"/>
  </bento>
  <plate>
    <orange/>
  </plate>
  <plate>
    <orange class="small"/>
</div>
```

```css
orange.small {
}
```

## Nível 8

```html
<div class="table">
  <bento>
    <orange/>
  </bento>
  <orange class="small"/>
  <bento>
    <orange class="small"/>
  </bento>
  <bento>
    <apple class="small"/>
  </bento>
  <bento>
    <orange class="small"/>
  </bento>
</div>
```

```css
bento orange.small {
}
```

## Nível 9

```html
<div class="table">
  <pickle class="small"/>
  <pickle/>
  <plate>
    <pickle/>
  </plate>
  <bento>
    <pickle/>
  </bento>
  <plate>
    <pickle/>
  </plate>
  <pickle/>
  <pickle class="small"/>
</div>
```

```css
plate,bento {
}
```

## Nível 10

```html
<div class="table">
  <apple/>
  <plate>
    <orange class="small" />
  </plate>
  <bento/>
  <bento>
    <orange/>
  </bento>
  <plate id="fancy"/>
</div>
```

```css
* {
}
```

## Nível 11

```html
<div class="table">
  <plate id="fancy">
    <orange class="small"/>
  </plate>
  <plate>
    <pickle/>
  </plate>
  <apple class="small"/>
  <plate>
    <apple/>
</div>
```

```css
plate * {
}
```

## Nível 12

```html
<div class="table">
  <bento>
    <apple class="small"/>
  </bento>
  <plate />
  <apple class="small"/>
  <plate />
  <apple/>
  <apple class="small"/>
  <apple class="small"/>
</div>
```

```css
plate + apple {
}
```

## Nível 13

```html
<div class="table">
  <pickle/>
  <bento>
    <orange class="small"/>
  </bento>
  <pickle class="small"/>
  <pickle/>
  <plate>
    <pickle/>
  </plate>
  <plate>
    <pickle class="small"/>
  </plate>
</div>
```

```css
bento ~ pickle {
}
```

## Nível 14

```html
<div class="table">
  <plate>
    <bento>
      <apple/>
    </bento>
  </plate>
  <plate>
    <apple/>
  </plate>
  <plate/>
  <apple/>
  <apple class="small"/>
</div>
```

```css
plate > apple {
}
```

## Nível 15

```html
<div class="table">
  <bento/>
  <plate />
  <plate>
    <orange />
    <orange />
    <orange />
  </plate>
  <pickle class="small" />
</div>
```

```css
plate :first-child {
}
```

## Nível 16

```html
<div class="table">
  <plate>
    <apple/>
  </plate>
  <plate>
    <pickle />
  </plate>
  <bento>
    <pickle />
  </bento>
  <plate>
    <orange class="small"/>
    <orange/>
  </plate>
  <pickle class="small"/>
</div>
```

```css
plate :only-child {
}
```

## Nível 17

```html
<div class="table">
  <plate id="fancy">
    <apple class="small"/>
  </plate>
  <plate/>
  <plate>
    <orange class="small"/>
    <orange>
  </plate>
</div>
```

```css
.small:last-child {
}
```

## Nível 18

```html
<div class="table">
  <plate/>
  <plate/>
  <plate/>
  <plate id="fancy"/>
</div>
```

```css
:nth-child(3) {
}
```

## Nível 19

```html
<div class="table">
  <plate/>
  <bento/>
  <plate>
    <orange/>
    <orange/>
    <orange/>
  </plate>
  <bento/>
</div>
```

```css
bento:nth-last-child(3) {
}
```

## Nível 20

```html
<div class="table">
  <orange class="small"/>
  <apple/>
  <apple class="small"/>
  <apple/>
  <apple class="small"/>
  <plate>
    <orange class="small"/>
    <orange/>
  </plate>
</div>
```

```css
apple:first-of-type {
}
```

## Nível 21

```html
<div class="table">
  <plate/>
  <plate/>
  <plate/>
  <plate/>
  <plate id="fancy"/>
  <plate/>
</div>
```

```css
plate:nth-of-type(even) {
}
```

## Nível 22

```html
<div class="table">
  <plate/>
  <plate>
    <pickle class="small" />
  </plate>
  <plate>
    <apple class="small" />
  </plate>
  <plate/>
  <plate>
    <apple />
  </plate>
  <plate/>
</div>
```

```css
plate:nth-of-type(2n+3) {
}
```

## Nível 23

```html
<div class="table">
  <plate id="fancy">
    <apple class="small" />
    <apple />
  </plate>
  <plate>
    <apple class="small" />
  </plate>
  <plate>
    <pickle />
  </plate>
</div>
```

```css
apple:only-of-type {
}
```

## Nível 24

```html
<div class="table">
  <orange class="small"/>
  <orange class="small" />
  <pickle />
  <pickle />
  <apple class="small" />
  <apple class="small" />
</div>
```

```css
.small:last-of-type {
}
```

## Nível 25

```html
<div class="table">
  <bento/>
  <bento>
    <pickle class="small"/>
  </bento>
  <plate/>
</div>
```

```css
bento:empty {
}
```

## Nível 26

```html
<div class="table">
  <plate id="fancy">
    <apple class="small" />
  </plate>
  <plate>
    <apple />
  </plate>
  <apple />
  <plate>
    <orange class="small" />
  </plate>
  <pickle class="small" />
</div>
```

```css
apple:not(.small) {
}
```

## Nível 27

```html
<div class="table">
  <bento><apple class="small"/></bento>
  <apple for="Ethan"/>
  <plate for="Alice"><pickle/></plate>
  <bento for="Clara"><orange/></bento>
</div>
```

```css
[for] {
}
```

## Nível 28

```html
<div class="table">
  <plate for="Sarah"><pickle/></plate>
  <plate for="Luke"><apple/></plate>
  <plate/>
  <bento for="Steve"><orange/></bento>
</div>
```

```css
plate[for] {
}
```

## Nível 29

```html
<div class="table">
  <apple for="Alexei" />
  <bento for="Albina"><apple /></bento>
  <bento for="Vitaly"><orange/></bento>
  <pickle/>
</div>
```

```css
[for=Vitaly] {
}
```

## Nível 30

```html
<div class="table">
  <plate for="Sam"><pickle/></plate>
  <bento for="Sarah"><apple class="small"/></bento>
  <bento for="Mary"><orange/></bento>
</div>
```

```css
[for^="Sa"] {
}
```

## Nível 31

```html
<div class="table">
  <apple class="small"/>
  <bento for="Hayato"><pickle/></bento>
  <apple for="Ryota"></apple>
  <plate for="Minato"><orange/></plate>
  <pickle class="small"/>
</div>
```

```css
[for$="ato"] {
}
```

## Nível 32

```html
<div class="table">
  <bento for="Robbie"><apple /></bento>
  <bento for="Timmy"><pickle /></bento>
  <bento for="Bobby"><orange /></bento>
</div>
```

```css
[for*="obb"] {
}
```