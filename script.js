let previewContainer = document.querySelector('.product-preview');
let previewBox = previewContainer.querySelectorAll('.trial');

document.querySelectorAll('.products-container .product').forEach(product =>{
	product.onclick =()=>{
		previewContainer.style.display = 'flex';
		let name=product.getAttribute('data-name');
		previewBox.forEach(trial =>{
		let target = trial.getAttribute('data-target');
			if(name == target){
				trial.classList.add('active');
			}
		});
	};
});

previewBox.forEach(close =>{
	close.querySelector('.fa-times').onclick =() =>{
		close.classList.remove('active');
		previewContainer.style.display='none';
	};
});