// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  const inputValue = document.getElementById("myInput").value;
  var x = document.getElementById("myInput3").value, y = document.getElementById("myInput4").value;
  var test = document.getElementById("myUL")
  function Urgency(x, y, inputValue, test) { 
		z = x + y
		if (test.childNode === undefined) {
			 var t = document.createTextNode(inputValue); //
			 li.appendChild(t); //
			 document.getElementById("myUL").appendChild(li);
		} else if ( z < 5) {
			 var t = document.createTextNode(inputValue); //
			 li.appendChild(t); //
			 document.getElementById("myUL").appendChild(li);
			 document.insertBefore(t, test.childNode[0])
		} else {
			console.log("else")
		}

	}
  if (inputValue === '') {
    alert("You must write something!");
  } else {
	Urgency(x, y, inputValue, test)
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
