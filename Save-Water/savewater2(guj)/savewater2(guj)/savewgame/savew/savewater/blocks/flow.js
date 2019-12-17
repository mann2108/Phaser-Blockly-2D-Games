'use strict';

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([
  {
    "type": "up",
    "message0": "NORTH (N) %1",
    
    "args0": [
      {
        "type": "field_image",
        "src": "assets/up3.png",
        "width": 50,
        "height": 40,
        "alt": "*",
        "flipRtl": false
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": '#00B0BD',
    "tooltip": "",
    "helpUrl": ""
  
  }
]);

Blockly.defineBlocksWithJsonArray([
  {
    "type": "down",
    "message0": "SOUTH (S) %1",
    "args0": [
      {
        "type": "field_image",
        "src": "assets/down3.png",
        "width": 50,
        "height": 40,
        "alt": "*",
        "flipRtl": false
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": '#00B0BD',
    "tooltip": "",
    "helpUrl": ""
  
  }
]);

Blockly.defineBlocksWithJsonArray([
{
  "type": "east",
  "message0": "EAST (E) %1",
  "args0": [
    {
      "type": "field_image",
      "src": "assets/right3.png",
      "width": 50,
      "height": 40,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": '#00B0BD',
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.defineBlocksWithJsonArray([

{
  "type": "west",
  "message0": "WEST (W)  %1",
  "args0": [
    {
      "type": "field_image",
      "src": "assets/left3.png",
      "width": 50,
      "height": 40,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": '#00B0BD',
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.defineBlocksWithJsonArray([
  {
    "type": "start",
    "message0": "START GAME %1",
    "args0": [
      {
        "type": "field_image",
        "src": "assets/water1.png",
        "width": 50,
        "height": 50,
        "alt": "*",
        "flipRtl": false
      }
    ],
    "nextStatement": null,
    "colour": '#fda400',
    "tooltip": "",
    "helpUrl": ""
  }
]);

Blockly.defineBlocksWithJsonArray([
  {
    "type": "loop",
    "message0": "Repeat %1 %2 %3 %4",
    "args0": [
     {
       "type":"field_image",
       "src":"assets/reset-512.png",
       "width":50,
       "height":50,
       "alt":"*",
       "flipRtl":false
     },
     
      {
        "type": "input_dummy",
        "align": "CENTRE"
      },
      {
        "type": "field_number",
        "name": "loopValue",
        "value": 0
      },
      {
        "type": "input_statement",
        "name": "NAME"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour":  230 ,
    "tooltip": "",
    "helpUrl": ""
  }
  
  ]);  
  
/*Blockly.defineBlocksWithJsonArray([
{
  "type": "directions-left",
  "lastDummyAlign0": "RIGHT",
  "message0": "Left",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

]);

Blockly.defineBlocksWithJsonArray([
{
  "type": "directions-right",
  "lastDummyAlign0": "RIGHT",
  "message0": "Right",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

]);



Blockly.defineBlocksWithJsonArray([
{
  "type": "directions-top",
  "lastDummyAlign0": "RIGHT",
  "message0": "Top",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

]);

Blockly.defineBlocksWithJsonArray([
{
  "type": "directions-down",
  "lastDummyAlign0": "RIGHT",
  "message0": "Down",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}


]);

Blockly.defineBlocksWithJsonArray([
{
  "type": "end",
  "message0": "End",
  "previousStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

]);




Blockly.defineBlocksWithJsonArray([

 {
  "type": "directions",
  "message0": "Start Game %1",
  "args0": [
    {
      "type": "input_statement",
      "name": "command"
    }
  ],
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

]);*/
