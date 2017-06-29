var snake = [];

function create_board(x,y){
    var count = 1;
    var $container = $("<div id='gameboard'></div>");

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
    var location = Math.floor(Math.random() * 1600) + 1;
    $("#content").find("#" + location).addClass('fruit');
}

function movement(){
    var direction = "";

    setInterval(function() {
      if (direction) {
        move(direction);
      }
    }, 150);

    $(document).keydown(function(event) {
      if (event.which === 39) {
        direction = "right";
      } else if (event.which === 37) {
        direction = "left";
      } else if (event.which === 38) {
        direction = "up";
      } else if (event.which === 40) {
        direction = "down";
      }
    });

    var move = function(dir){
        var headLocation = snake[snake.length - 1];
        var tail = 0;

        switch(dir) {
            case "right":
                var newLocation = headLocation + 1;
                break;
            case "left":
                var newLocation = headLocation - 1;
                break;
            case "up":
                var newLocation = headLocation - 40;
                break;
            case "down":
                var newLocation = headLocation + 40;
                break;
        }

        //eat fruit
        if ($("#" + newLocation).hasClass("fruit")){
            tail = snake[0];
            $("#" + newLocation).removeClass('fruit');
            fruit();
        }

        //end if snake touches body
        if ($("#" + newLocation).hasClass("body")){
            alert('Game over!');
            for (var i = 0; i <= snake.length; i++){
                $("#" + snake[i]).removeClass("body");
            }
            snake = [];
            direction = "";
        }

        //end game if touch edge
        if (!($("#" + newLocation).hasClass("box"))){
            alert('Game over!');
            for (var i = 0; i <= snake.length; i++){
                $("#" + snake[i]).removeClass('body');
            }
            snake = [];
            direction = "";
        }

        //update snake
        for (var i = 0;i < snake.length; i++){
            $("#" + snake[i]).removeClass('body');
            snake[i] = snake[i + 1];
        }
        if (tail !== 0){
            snake.unshift(tail);
        }

        for (var i = 0; i < snake.length; i++){
            $("#" + snake[i]).addClass('body');
        }
        snake[snake.length - 1] = newLocation;
        $("#" + newLocation).addClass('head');
        $("#" + headLocation).removeClass('head');  
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

