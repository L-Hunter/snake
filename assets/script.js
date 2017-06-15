$(document).ready(function() {

//add controls
var character = document.getElementById("character");
document.addEventListener("keydown", movement);
var x = 405;
var y = 405;
character.style.left = x + "px";
character.style.top = y + "px";

function movement(direction){
    var key = direction.keyCode;
    if(key === 38){
        console.log("up");
        y -= 22;
        character.style.top = y + 'px';
    	return y;
    } else if (key === 37) {
    	console.log("left");
    	x -= 22;
    	character.style.left = x + 'px';
    	return x;
    } else if (key === 39){
    	console.log("right");
    	x += 22;
    	character.style.left = x + 'px';
    	return x;
    } else if (key === 40) {
    	console.log("down");
    	y += 22;
    	character.style.top = y + 'px';
    	return y;
    } else {
        alert("Please use the arrow keys");
    }
}

//create board
var rows = 40;
var columns = 40;
var $row = $("<div />", {
    class: 'row'
});
var $square = $("<div />", {
    class: 'square'
});

function render(){
    for (var i = 0; i < columns; i++) {
        $row.append($square.clone());
    }
    for (var j = 0; j < rows; j++) {
        $("#board").append($row.clone());
    }
}

render();

});
