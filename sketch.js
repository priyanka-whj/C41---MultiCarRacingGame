var db;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;

var form, player, game;

function setup() 
{
    createCanvas(400, 400);

    db = firebase.database();

    game = new Game();
    game.getState();
    game.start();
}

function draw() 
{
    if(playerCount === 4)
    {
        game.updateState(1);
    }
    if(gameState === 1)
    {
        clear();
        game.play();
    }
}





