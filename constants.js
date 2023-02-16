const IP = "165.227.47.243";
const PORT = 50541;
const UID = "SCH";

// const MOVE_UP = 'w';
// const MOVE_LEFT = 'a';
// const MOVE_DOWN = 's';
// const MOVE_RIGHT = 'd';

/*
Move: Up
Move: Left
Move: Down
Move: Right
Say: EXAMPLE_TEXT
Name: EXAMPLE_TEXT
*/
//List of all they keys that function while playing
const COMMAND_LIST = {
  'w': 'Move: up',
  'i': 'Move: up',

  'a': 'Move: left',
  'j': 'Move: left',

  's': 'Move: down',
  'k': 'Move: down',

  'd': 'Move: right',
  'l': 'Move: right',

  '1': 'Say: Hello o/',
  '2': 'Say: LEEROY JENKINS',
  '3': 'Say: MAXIMUM OVERDRIVE!',
  '4': 'Say: Lighthouse Labbing',
};

module.exports = {
  IP,
  PORT,
  UID,
  COMMAND_LIST,
  // MOVE_UP,
  // MOVE_LEFT,
  // MOVE_DOWN,
  // MOVE_RIGHT,
};