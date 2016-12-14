#Session 10

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

```js
var inputs = document.querySelectorAll('.controls input');
```

Note difference between node list and array. forEach method.

```js
function handleUpdate(){
  console.log(this.value);
}

inputs.forEach(function(input){
  input.addEventListener('change', handleUpdate)
})
```

Note the update frequency.

Add:

```
inputs.forEach(function(input){
  input.addEventListener('mousemove', handleUpdate)
})
```

The suffix of the values we are working with - p. Note the data attribute in the html.

Add `data-daniel="me" data-munchies="snickers"`. 

Get the data set attribute values:

```
function handleUpdate(){
  console.log(this.dataset);
}
```

Try the below in the browser without the or nothing.

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



