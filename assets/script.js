$(document).ready(function() {

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
