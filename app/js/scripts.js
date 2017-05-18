var inputs = document.querySelectorAll('.controls input');

inputs.forEach(function(input){
  input.addEventListener('mousemove', handleUpdate)
})

function handleUpdate(){
  var suffix = this.dataset.sizing || '';
	document.querySelector('html').style.setProperty('--' + this.name, this.value + suffix);
}