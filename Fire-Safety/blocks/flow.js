'use strict';

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([
  {
    "type": "up",
    "message0": "UP %1",
    
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
    "colour": '#336B87',
    "tooltip": "",
    "helpUrl": ""
  
  }
]);

Blockly.defineBlocksWithJsonArray([
  {
    "type": "down",
    "message0": "DOWN %1",
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
    "colour": '#336B87',
    "tooltip": "",
    "helpUrl": ""
  
  }
]);

Blockly.defineBlocksWithJsonArray([
{
  "type": "east",
  "message0": "RIGHT %1",
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
  "colour": '#336B87',
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.defineBlocksWithJsonArray([

{
  "type": "west",
  "message0": "LEFT %1",
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
  "colour": '#336B87',
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
        "src": "assets/play.png",
        "width": 50,
        "height": 50,
        "alt": "*",
        "flipRtl": false
      }
    ],
    "nextStatement": null,
    "colour": '',
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
    "colour":  '230' ,
    "tooltip": "",
    "helpUrl": ""
  }
  
  ]); 

  //PULL BLOCK

  Blockly.defineBlocksWithJsonArray([

    {
      "type": "p",
      "message0": "PULL %1",
      "args0": [
        {
          "type": "field_image",
          "src": "assets/pull.png",
          "width": 50,
          "height": 50,
          "alt": "*",
          "flipRtl": false
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#CB0000',
      "tooltip": "",
      "helpUrl": ""
    }]);  

    //AIM BLOCK
    Blockly.defineBlocksWithJsonArray([

    {
      "type": "a",
      "message0": "AIM %1",
      "args0": [
        {
          "type": "field_image",
          "src": "assets/aim.png",
          "width": 70,
          "height": 70,
          "alt": "*",
          "flipRtl": false
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#CB0000',
      "tooltip": "",
      "helpUrl": ""
    }
  ]);

//SQUEEZE BLOCK
Blockly.defineBlocksWithJsonArray([

  {
    "type": "s",
    "message0": "SQUEEZE %1",
    "args0": [
      {
        "type": "field_image",
        "src": "assets/squeeze.png",
        "width": 70,
        "height": 80,
        "alt": "*",
        "flipRtl": false
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": '#CB0000',
    "tooltip": "",
    "helpUrl": ""
  }

]);

//SWEEP BLOCK
Blockly.defineBlocksWithJsonArray([

{
  "type": "sw",
  "message0": "SWEEP %1",
  "args0": [
    {
      "type": "field_image",
      "src": "assets/sweep.png",
      "width": 70,
      "height": 80,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": '#CB0000',
  "tooltip": "",
  "helpUrl": ""
}
]);