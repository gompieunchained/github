window.onload = function() {
	let block = document.getElementById('block');
	//Pos y manipulation
	let posY = document.getElementById('pos-y');
	posY.onchange = function(){
		block.style.top = posY.value+'px';
	}
	// pos x manipulation
	let posX = document.getElementById('pos-x');
	posX.onchange = function(){
		block.style.left = posX.value+'px';
	}
	let size = document.getElementById('size');
	size.onchange = function(){
		block.style.transform = 'scale('+size.value+')';
	}

	let opacity = document.getElementById('opacity');
	opacity.onchange = function(){
		block.style.opacity = opacity.value;
	}

	let selector = document.getElementById('shape-select');
	let okButton = document.getElementById('ok-shape');
	okButton.onclick = function(){
		let option = selector.value;
		if(option === '1'){
			block.style.borderRadius = '0%';
			block.style.transform = 'rotate(0deg)';

		}
		else if(option ==='2'){
			block.style.borderRadius = '50%';
		}
		else {
			block.style.borderRadius = '0%';
			block.style.transform = 'rotate(45deg)';

		}
}
	let hex = document.getElementById('hex');
	hex.onkeypress = function(e){
		if(e.which === 13){
			block.style.background = '#'+ hex.value;
	}
		}

		let rgbaR = document.getElementById('rgba-r');
		let rgbaG = document.getElementById('rgba-g');
		let rgbaB = document.getElementById('rgba-b');
		let rgbaA = document.getElementById('rgba-a');
		
		let rgbaCont = document.querySelector('.rgba-container');
		let rgbaInputs = rgbaCont.querySelectorAll('input');

		for (let i = 0; i < rgbaInputs.length; i++){
			rgbaInputs[i].onchange = function() {
				block.style.background = 'rgba('+rgbaR.value+','+rgbaG.value+','+rgbaB.value+','+rgbaA.value+')';
			}
		}
	
}