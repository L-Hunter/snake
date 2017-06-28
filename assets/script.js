// $(document).ready(function() {

// //add controls
// var character = document.getElementById("character");
// document.addEventListener("keydown", movement);
// var x = 405;
// var y = 405;
// character.style.left = x + "px";
// character.style.top = y + "px";

// // snake controls
// function movement(direction){
//     var key = direction.keyCode;
//     if(key === 38){
//         console.log("up");
//         y -= 22;
//         character.style.top = y + 'px';
//     	return y;
//     } else if (key === 37) {
//     	console.log("left");
//     	x -= 22;
//     	character.style.left = x + 'px';
//     	return x;
//     } else if (key === 39){
//     	console.log("right");
//     	x += 22;
//     	character.style.left = x + 'px';
//     	return x;
//     } else if (key === 40) {
//     	console.log("down");
//     	y += 22;
//     	character.style.top = y + 'px';
//     	return y;
//     } else {
//         alert("Please use the arrow keys");
//     }
// }

// //render fruit: make fruit randomly appear
// function food(){

// }
// // function to grow snake if it eats the food

// // bring the snake to life by running a game loop that uses setTimeout()
// //Each turn, invoke a move() function which moves the snake one square in the current direction of travel for each turn

// function play(){
//     //food();
//     movement();
// }
// //end game: Create logic which ends the game if the snake head goes off the board.
// //end game if snake eats its body

// //create board
// var rows = 40;
// var columns = 40;
// var $row = $("<div />", {
//     class: 'row'
// });
// var $square = $("<div />", {
//     class: 'square'
// });

// function render(){
//     for (var i = 0; i < columns; i++) {
//         $row.append($square.clone());
//     }
//     for (var j = 0; j < rows; j++) {
//         $("#board").append($row.clone());
//     }
// }


// render();

// });

//tom
//Params
var left = 37;
var right = 39;
var up = 38;
var down = 40;
var snake = [];

function create_board(x,y){
    var count = 1;
    var $container = $("<div></div>");

    for(var i = 0; i <= x; i++) {
        for (var j = 0; j < y; j++){
            $("<div id=" + (j + count) + "></div>").addClass("box").appendTo($container);
        }
        count += 40;
        $("<div class='row'></div>").appendTo($container);
    }

    $container.appendTo($("#content"));
}

function render_snake(){
    $("#content").find("#177").addClass('head');
    $("#content").find("#176").addClass('body');
    $("#content").find("#175").addClass('body');
    $("#content").find("#174").addClass('body');
    snake.push(174);
    snake.push(175);
    snake.push(176);
    snake.push(177);
}

function fruit(){
    var location = Math.floor(Math.random()*1600)+1;
    $("#content").find("#"+location).addClass('fruit');
}

function movement(){
    var currentMove = '';

    setInterval(function() {
      if (currentMove !== '') {
        move(currentMove);
      }
    }, 100);

    $(document).keydown(function(event) {
      if (event.which === right) {
        currentMove = 'r';
      } else if (event.which === left) {
        currentMove = 'l';
      } else if (event.which === up) {
        currentMove = 'u';
      } else if (event.which === down) {
        currentMove = 'd';
      }
    });
    var move = function(dir){
        var currentID = snake[snake.length-1];

        switch(dir) {
            case 'r':
                var nextID = currentID+1;
                break;
            case 'l':
                var nextID = currentID-1;
                break;
            case 'u':
                var nextID = currentID-40;
                break;
            case 'd':
                var nextID = currentID+40;
                break;
        }

        var tail = 0;
        //check whether the SNAKE has hit a 'fruit'
        if ($("#"+nextID).hasClass("fruit")){
            tail = snake[0];
            $("#"+nextID).removeClass('fruit');
            fruit();  //generate a new fruit piece
        }

        //Check whether snake has hit itself
        if ($("#"+nextID).hasClass("snake")){
            alert('Game over!');
            for (var i=0;i<=snake.length;i++){
                //remove snake from [i]
                $("#"+snake[i]).removeClass('body');

            }
            snake=[];
            currentMove='';
        }
        //Check whether snake is out of bounds
        if (!($("#"+nextID).hasClass("box"))){
            alert('Game over!');
            for (var i=0;i<=snake.length;i++){
                //remove snake from [i]
                $("#"+snake[i]).removeClass('body');

            }
            snake=[];
            currentMove='';
        }
        //update SNAKE array
        for (var i=0;i<snake.length;i++){
            //remove snake from [i]
            $("#"+snake[i]).removeClass('body');
            snake[i]=snake[i+1];
        }
        if (tail !== 0){
            snake.unshift(tail);
        }

        for (var i=0; i<snake.length; i++){
            $("#"+snake[i]).addClass('body');
        }
        snake[snake.length-1] = nextID;
        $("#"+nextID).addClass('head');
        $("#"+currentID).removeClass('head');  
    };
    
}

function start(){
    fruit();
    movement();
}

$(document).ready(function(){
    create_board(40,40);
    render_snake();
    start();    
});

