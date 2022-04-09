console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', () => {
	alert('Form has been Submitted!');
  });;

document.querySelector('img').addEventListener('mouseover', () =>{
alert('YOU WILL BOW TO THE DUCK!')
} )
  




  