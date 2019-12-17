
var count = 1;
var sky;
var stairs;
var elevator;
var lift;
var poster;
var arrow1;
var arrow2;
var arrow3;
var arrow4;

var gameOver = false;
var scoreText;
var config;

function resize() {
    
    var canvas = document.querySelector("canvas");

    canvas.style.width="50%";
    canvas.style.height="50%";

    canvas.style.minHeight="50%";
    canvas.style.minWidth="50%";

}

window.onload = function() {

    //Game config here
    config = {
        type: Phaser.AUTO,
        width: 700,
        height: 420,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 },
                debug: false
            }
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    game = new Phaser.Game(config);
    resize();
    window.addEventListener("resize", resize, false);
}


function preload ()
{
    this.load.image('sky', 'assets/white.png');
    this.load.image('kid','assets/kid.png');
    this.load.image('stairs','assets/staircase.png');
    this.load.image('elevator','assets/elevator.png');
    this.load.image('lift','assets/lift.png');
    this.load.image('poster','assets/poster1.png');
    this.load.image('arrow1','assets/1.png');
    this.load.image('arrow2','assets/2.png');
    this.load.image('arrow3','assets/3.png');
    this.load.image('arrow4','assets/4.png');
  
}

function create ()
{
    //  A simple background for our game
    this.add.image(350, 210, 'sky');
    
    //POSTER
    this.add.image(400, 200, 'poster');


    //STAIRS
    this.add.image(80, 65, 'stairs');


    //ELEVATOR
    this.add.image(80, 350, 'elevator');

    //LIFT
    this.add.image(630, 100, 'lift');

    

    //LEFT ARROW 
    this.add.image(610, 385, 'arrow3');
    this.add.image(550, 385, 'arrow3');
    this.add.image(490, 385, 'arrow3');
    this.add.image(430, 385, 'arrow3');
    this.add.image(360, 385, 'arrow3');
    this.add.image(300, 385, 'arrow3');
    this.add.image(240, 385, 'arrow3');

     //LEFT ARROW BEFORE STAIRS 
     this.add.image(190, 60, 'arrow3');
    


    //UP ARROW ABOVE KID
    this.add.image(670, 240, 'arrow4');
    this.add.image(670, 300, 'arrow4');

    //UP ARROW BEFORE ELEVATOR
    this.add.image(240, 330, 'arrow4');
    this.add.image(240, 270, 'arrow4');
    this.add.image(240, 210, 'arrow4');
    this.add.image(240, 150, 'arrow4');
    this.add.image(240, 90, 'arrow4');

    //Kid
    kid=this.physics.add.image(700, 380, 'kid');
    kid.setCollideWorldBounds();

       this.physics.add.overlap(kid,blanket,disappear,null,this);
    
    this.physics.add.overlap(kid,man,appear,null,this);


}



function update ()
{
    
       
}

