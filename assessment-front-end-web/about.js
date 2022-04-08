console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', () => {
	alert('Form has been Submitted!');
  });;

//   function handleImage (evt) {
// 	evt.preventDefault();
	
// 	console.log('content image');
// }


// let content = document.querySelector('content#img');

// content.addEventListener('mouseover', () => {
// 	alert('you are kind!');
// });;
  




  