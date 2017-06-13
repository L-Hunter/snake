$(document).ready(function() {

//add controls
document.addEventListener("keydown", movement);

function movement(direction){
    var key = direction.keyCode;
    if(key === 38){
        console.log("up");
    } else if (key === 37) {
    	console.log("left");
    } else if (key === 39){
    	console.log("right");
    } else if (key === 40) {
    	console.log("down")
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
