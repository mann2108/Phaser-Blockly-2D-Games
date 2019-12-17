'use strict';
goog.require('Blockly.JavaScript');
var p = 1;
var count = 0;
var flag=true;

var commands="";

function End(){
if(commands!="b1"){
  $("#exampleModal1").modal('show');
Reset();
}
else{
  /*$("#exampleModal").modal();*/
  setTimeout( function timer(){
      $("#exampleModal").modal();
    
   }, 1*500 );

}


}

function Reset(){
  player.x=120;
  player.y=290;
 
  player.anims.play('turn',true);
  if (Blockly.mainWorkspace !== null) {
  Blockly.mainWorkspace.clear();
   }
   count=0;
}

Blockly.JavaScript['good1'] = function(block) {
  // TODO: Assemble JavaScript into code variable.

  if(flag)
  {
      $("#exampleModal3").modal('show');
    
    return;

  }

  var code = '...;\n';
  commands +='g1';
  return code;
};

Blockly.JavaScript['bad1'] = function(block) {
  // TODO: Assemble JavaScript into code variable.

  if(flag)
  {
      $("#exampleModal3").modal('show');
    
    return;

  }

  var code = '...;\n';
  commands +='b1';
  return code;
};

Blockly.JavaScript['start'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  flag=false;
  var code = '...;\n';
  return code;
};

