'use strict';
goog.require('Blockly.JavaScript');
var p = 1;
var count = 0;
var flag=true;

var commands="";

function End(){
if(commands!="ddww"){

  setTimeout( function timer(){
    $("#exampleModal1").modal('show');
    Reset();
  
 }, 6*759 );

 
}
else{
  /*$("#exampleModal").modal();*/
  setTimeout( function timer(){
      $("#exampleModal").modal();
    
   }, 7*759 );

}


}

function Reset(){
  player.x=95;
  player.y=420;
 
  player.anims.play('turn',true);
  if (Blockly.mainWorkspace !== null) {
  Blockly.mainWorkspace.clear();
   }
   count=0;
}

//downward
function downward(){
   
  if(p==1){
    //For spritesheet
  //   player.anims.play('right', true);
   
     kid.y +=40;
     
     p=0;
     count++;
     }else{
       //speech bubble
   
       count++;
       setTimeout( function timer(){
       //  player.anims.play('right', true);
      //   old.x +=150;
               kid.y +=40;
        
     }, count*500 )
     } 
}

//left

function left1(){
   
  if(p==1){
  
    kid.x -=50;
    
    //speech bubble
   
    
    p=0;
    count++;
    }else{
      //speech bubble
  
      count++;
      setTimeout( function timer(){
    kid.x -=50;
       
    }, count*500 )
    }

}


//up
Blockly.JavaScript['up'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  if(flag)
  {
      $("#exampleModal3").modal('show');
    
    return;

  }
    commands+="u";
  var code = '...;\n';
  return code
};

//DOWN
  

Blockly.JavaScript['down'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  if(flag)
  {
      $("#exampleModal3").modal('show');
    
    return;

  }

  downward();
     commands+="d";
   var code = '3';  //number which will be got by 'do' in if-else block
   return code
 };
  
//EAST

Blockly.JavaScript['east'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  if(flag)
  {
      $("#exampleModal3").modal('show');
    
    return;

  }
    commands+="e";
  var code = '...;\n';
  return code
};

Blockly.JavaScript['west'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  if(flag)
  {
      $("#exampleModal3").modal('show');
    
    return;

  }
  left1();
     commands+="w";
   var code = '0'; //number which will be got by 'do' in if-else block
   return code
 };

//START

Blockly.JavaScript['start'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  flag=false;
  var code = '...;\n';
  return code;
};



//LOOP

Blockly.JavaScript['loop'] = function(block) {  
 
  if(flag)
  {
      $("#exampleModal3").modal('show');
    return;

  }
  var number_loopvalue = block.getFieldValue('loopValue');  
  for( var i=0;i<number_loopvalue;i++)
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  
  var code = '...;\n';
  return code;
};




Blockly.JavaScript['dropdown'] = function(block) {
  var dropdown_path = block.getFieldValue('Path');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_path;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['if_else'] = function(block) {
  var d1 = Blockly.JavaScript.valueToCode(block, 'if', Blockly.JavaScript.ORDER_ATOMIC);
  var d2 = Blockly.JavaScript.statementToCode(block, 'do');

  // TODO: Assemble JavaScript into code variable
if(d1=='(3)' && d2==3 )
{
  downward();
}
else if(d1=='(0)' && d2==0)
{
  left1();
}
else{
  $("#exampleModal1").modal('show');
  Reset();

}
var code = ';\n';
  return code;
};




