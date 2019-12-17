

var config = {
    type: Phaser.AUTO,
    width: 900,
    height: 450,

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
        update: update,
        render: render,
    }
};

var player;
var home;
var score = 0;
var gameOver = false;
var scoreText;

var game = new Phaser.Game(config);

function preload ()
{
    
 
   this.load.image('grass', 'assets/grass_tile_3.png');
   this.load.image('sand', 'assets/sand_tile.png');
   this.load.image('1','assets/1.png');
   this.load.image('3','assets/3.png');
   this.load.image('4','assets/4.png');
   this.load.image('17','assets/17.png');
   this.load.image('19','assets/19.png');
   this.load.image('23','assets/23.png');
   this.load.image('house', 'assets/house.png');
   this.load.image('car', 'assets/car.png'); 
  // this.load.spritesheet('dude','assets/dude.png', { frameWidth: 32, frameHeight: 48 });

  /* this.load.image('grass','assets/grass_tile_3.png');
   this.load.image('path','assets/sand_tile.png');
   this.load.image('house','assets/house.png');
   this.load.sprite('car','assets/car.png');*/
}

function create ()
{
    
    //This bg group contains the background 'grass'
   bg = this.physics.add.staticGroup();
    bg.create(60, 60, 'grass');  
    bg.create(170, 60, 'grass');
    bg.create(280, 60, 'grass');
    bg.create(390, 60, 'grass');

    //pond 1st layer

    pond=this.physics.add.staticGroup();
    pond.create(500, 60, '1');
    pond.create(610, 60, '3');
    pond.create(725, 60, '3');
    pond.create(840, 60, '4');
   
  
   

    //2nd layer
    bg.create(60, 170, 'grass');  
    bg.create(170, 170, 'grass');
    bg.create(280, 170, 'grass');
    bg.create(390, 170, 'grass');

    //pond 2nd layer
    pond.create(500, 170, '17');
    pond.create(610, 170, '19');
    pond.create(725, 170, '19');
    pond.create(840, 170, '23');
   


    //3rd layer
    bg.create(60, 280, 'grass');  
    bg.create(170, 280, 'grass');
    bg.create(280, 280, 'grass');
    bg.create(390, 280, 'grass');
    bg.create(610, 280, 'grass');
    bg.create(725, 280, 'grass');
    bg.create(840, 280, 'grass');

    //4th layer
    
   bg.create(610, 390, 'grass');
    bg.create(725, 390, 'grass');
    bg.create(840, 390, 'grass');

//sand static group

path= this.physics.add.staticGroup();
path.create(60, 390, 'sand');  
path.create(170, 390, 'sand');
path.create(280, 390, 'sand');
path.create(390, 390, 'sand');
path.create(500, 390, 'sand');
 path.create(500, 280, 'sand');

 // House
 house= this.physics.add.sprite(610, 360, 'house');
 
 

    // The player and its settings
 player = this.physics.add.sprite(50, 380, 'car');
  
    //  Player physics properties. Give the little guy a slight bounce.

 //Spritesheet
 // player = this.physics.add.sprite(100, 380, 'dude');

//  Our player animations, turning, walking left and walking right.
this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1
});

this.anims.create({
    key: 'turn',
    frames: [ { key: 'dude', frame: 4 } ],
    frameRate: 20
});

this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1
});

 
    player.setCollideWorldBounds(true);
   
    //  Our player animations, turning, walking left and walking right.

    //  Collide the player and the stars with the platforms
    this.physics.add.collider(player, bg);
    this.physics.add.collider(player, house);

    this.physics.add.overlap(player, house, reachedHome, null, this);
    this.physics.add.overlap(player, pond, hitPond, null, this);

 
}



function update ()
{

}

function render(){

    game.debug.body(img);
}


function reachedHome ()
{
    player.disableBody(true, true);
  

}

