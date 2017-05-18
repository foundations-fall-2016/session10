# Session 10

### Forms

* focus

```
*:focus{
  outline: none;
}

input:focus, 
textarea:focus {
  box-shadow: 0 0 25px #ccc;
  transform: scale(1.05);
}

input:not(:focus), 
textarea:not(:focus) {
  opacity: 0.5;
}
```

Native browser validation

* novalidate
* required, valid, invalid

```
input:required, 
textarea:required {
  background:url("asterisk_orange.png") no-repeat 280px 7px;  
}

input:valid, 
textarea:valid {
  background:url("tick.png") no-repeat 280px 5px;     
}

input:focus:invalid, 
textarea:focus:invalid {
  background:url("cancel.png") no-repeat 280px 7px;         
}
```

Input types

* text, email, website, number, range

```
input[type=submit] {
  color: #fff;
  padding: 10px;
  background: #007eb6;
  opacity: 1.0;
}

input[type="number"], 
input[type="number"]:required, 
input[type="number"]:valid, 
input[type="number"]:focus:invalid {
  background-position: 260px 7px; 
}
```

Placeholder text

```
::-webkit-input-placeholder {
   color: #aaa;
}
```

### Native CSS variables. 

[Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) and [browser support](http://caniuse.com/#feat=css-variables)

Usage:

```css
:root {
  --base: #ffc600;
  --spacing: 10px;
  --blur: 10px;
}
img {
  padding: var(--spacing);
  background: var(--base);
  filter: blur(var(--blur));
}
.hl {
  color: var(--base);
}
```

Native CSS variables can be manipulated by JavaScript.

```js
var inputs = document.querySelectorAll('.controls input');
```

Note difference between node list and array. forEach method.

```js
inputs.forEach(function(input){
  input.addEventListener('change', handleUpdate)
})

function handleUpdate(){
  console.log(this.value);
}
```

Note the update frequency.

*Add:*

```
inputs.forEach(function(input){
  input.addEventListener('mousemove', handleUpdate)
})
```

The suffix of the values we are working with - px. Note the data-sizing attribute in the html.

Get the data set attribute values:

```
function handleUpdate(){
  console.log(this.dataset);
}
```

Add `data-daniel="me" data-munchies="snickers"`. 

Try the below in the browser without the "or nothing".

```
function handleUpdate(){
  var suffix = this.dataset.sizing || '';
  console.log(suffix);
}
```

Note the name property on the inputs.

```
function handleUpdate(){
  var suffix = this.dataset.sizing || '';
  console.log(this.name);
}
```
Tack the css on to the html element:

```
function handleUpdate(){
  var suffix = this.dataset.sizing || '';
  document.querySelector('html').style.setProperty('--' + this.name, this.value);
  console.log(this.name);
}
```

Add the suffix variable:

```
document.querySelector('html').style.setProperty('--' + this.name, this.value + suffix);
```

Refactor to easier to read ES6

```
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
```

Run it through http://babeljs.io/


