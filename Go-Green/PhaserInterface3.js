
var count = 1;
var player;
var gameOver = false;
var scoreText;
var config;
var d1;
var d2;
var d3;
var b2;
var v1;
var bottle;
var paper;
var arrow1;
var arrow2;
var arrow3;
var arrow4;


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
        width: 750,
        height: 500,
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
    this.load.image('b2', 'assets/grass.png');
    this.load.image('kid','assets/kid.png');
    this.load.image('d1','assets/red.png');
    this.load.image('d2','assets/greend.png');
    this.load.image('d3','assets/blued.png');
    this.load.image('bottle','assets/plasticwaste1.png');
    this.load.image('paper','assets/paperwaste1.png');
    this.load.image('arrow1','assets/w-arrow.png');
    this.load.image('arrow2','assets/w-arrowd.png');
    this.load.image('arrow3','assets/left.png');
    this.load.image('arrow4','assets/w-arrowu.png');
    this.load.image('v1','assets/SummitFoodWaste3.png');
    this.load.image('garbage','assets/garbage.png');


    
    //  this.load.image('old','assets/old.png');
  //this.load.spritesheet('dude', 'assets/dude3.png', { frameWidth: 55, frameHeight:109});
  
  
  
}

function create ()
{
    //  A simple background for our game
      this.add.image(384, 249, 'b2');

      //arrow right

      //arrows after kid
       arrow=this.physics.add.group();
        
        arrow.create(120,400,'arrow1');
        

        //waste

    v1= this.physics.add.image(500,200,'v1');

     

//arrows after green dustbin

      arrow.create(250,130,'arrow1');
      arrow.create(300,130,'arrow1');

   

    //arrows towards blue dustbin
    arrow.create(400,250,'arrow1');
    arrow.create(450,250,'arrow1');
    arrow.create(500,250,'arrow1');
    arrow.create(550,250,'arrow1');
    arrow.create(600,250,'arrow1');
    arrow.create(650,250,'arrow1');

    



    //arrow before plastic bottle
   // arrow.create(430,480,'arrow1');
//arrow before paper
   // arrow.create(430,405,'arrow1');
//arrow after paper
  //  arrow.create(560,480,'arrow1');
  //  arrow.create(610,480,'arrow1');
//arrow after bottle
    //arrow.create(560,405,'arrow1');
   // arrow.create(610,405,'arrow1');

     // arrow.create(310,350,'arrow1');
   // arrow.create(380,350,'arrow1');

    //arrow.create(450,480,'arrow1');
    //arrow.create(500,480,'arrow1');
    //arrow.create(550,480,'arrow1');
    
    //arrow down
     


    arrow=this.physics.add.group();
  
    arrow.create(350,170,'arrow2');
    arrow.create(350,220,'arrow2'); 

    //arrow up

     arrow=this.physics.add.group();
        arrow.create(200,320,'arrow4');
        arrow.create(200,280,'arrow4');
        arrow.create(200,240,'arrow4');
        arrow.create(200,200,'arrow4');
        arrow.create(200,150,'arrow4');

      
        //arrow after wet waste

        
        arrow.create(650,200,'arrow4');
        arrow.create(650,150,'arrow4');
      
        

       //dustbin
       
        d2=this.physics.add.image(120,80,'d2');
        d3=this.physics.add.image(690,80,'d3');


     
     

      //paper

    paper=  this.physics.add.image(200,400,'paper');
      arrow.create(200,420,'arrow1');
     
      //kid
      kid = this.physics.add.image(50,400,'kid');
      kid.setCollideWorldBounds(true);

     
  
 
 
    

    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
        this.physics.add.overlap(kid,paper,disappear1,null,this);
    
        this.physics.add.overlap(kid,d2,appear1,null,this);

        this.physics.add.overlap(kid,v1,disappear,null,this);
    
        this.physics.add.overlap(kid,d3,appear,null,this);



}



function update ()
{
    
       
}

function disappear1()
{
        paper.disableBody(true,true);
}

function appear1()
{
  this.add.image(120,50,'garbage');
}

function disappear()
{
        v1.disableBody(true,true);
}

function appear()
{
  this.add.image(700,50,'garbage');
}
