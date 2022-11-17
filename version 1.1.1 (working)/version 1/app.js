var percentage=0;
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const oneID = document.getElementById('mainwrapperID');


button1.onclick = () => {
	percentage += -100;
	oneID.style.transform=`translate3d(0px, ${percentage}%, 0px)`;

}
button2.onclick = () => {
	percentage += +100;
	oneID.style.transform=`translate3d(0px, ${percentage}%, 0px)`;

}
button3.onclick = () => {
	percentage += -100;
	oneID.style.transform=`translate3d(0px, ${percentage}%, 0px)`;
	

}
button4.onclick = () => {
	percentage += +100;
	oneID.style.transform=`translate3d(0px, ${percentage}%, 0px)`;
	
}




document.addEventListener('keydown', (event) => {
	var name = event.key;
	var code = event.code;
	if (name == 'ArrowDown' && percentage>=-100) {
		percentage += -100;
		oneID.style.transform=`translate3d(0px, ${percentage}%, 0px)`;
		
	}
	else if (name == 'ArrowUp' && percentage<=-100) {
		percentage +=100;
		oneID.style.transform=`translate3d(0px, ${percentage}%, 0px)`;
		
	}

});








		////////////////////////// animatiom   ////////////////////////////////////////////////
		var _CONTENT = [
			"WORLD!",
			"DEVELOPERS!",
		];
		
		// Current sentence being processed
		var _PART = 0;
		
		// Character number of the current sentence being processed 
		var _PART_INDEX = 0;
		
		// Holds the handle returned from setInterval
		var _INTERVAL_VAL;
		
		// Element that holds the text
		var _ELEMENT = document.querySelector("#text");
		
		// Cursor element 
		var _CURSOR = document.querySelector("#cursor");
		
		// Implements typing effect
		function Type() {
			// Get substring with 1 characater added
			var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
			_ELEMENT.innerHTML = text;
			_PART_INDEX++;
		
			// If full sentence has been displayed then start to delete the sentence after some time
			if (text === _CONTENT[_PART]) {
				// Hide the cursor
				_CURSOR.style.display = 'none';
		
				clearInterval(_INTERVAL_VAL);
				setTimeout(function () {
					_INTERVAL_VAL = setInterval(Delete, 80);
				}, 2000);
			}
		}
		
		// Implements deleting effect
		function Delete() {
			// Get substring with 1 characater deleted
			var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
			_ELEMENT.innerHTML = text;
			_PART_INDEX--;
		
			// If sentence has been deleted then start to display the next sentence
			if (text === '') {
				clearInterval(_INTERVAL_VAL);
		
				// If current sentence was last then display the first one, else move to the next
				if (_PART == (_CONTENT.length - 1))
					_PART = 0;
				else
					_PART++;
		
				_PART_INDEX = 0;
		
				// Start to display the next sentence after some time
				setTimeout(function () {
					_CURSOR.style.display = 'inline-block';
					_INTERVAL_VAL = setInterval(Type, 100);
				}, 200);
			}
		}
		
		// Start the typing effect on load
		_INTERVAL_VAL = setInterval(Type, 200);
		
		
		///////////////////////////////animation finishes/////////////////////////////////////
