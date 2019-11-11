var syllable = require('syllable');
//var util = require('util');

detect = function(msg) {
  return format(msg).length === 3
};

format = function(msg) {
  var syllable_count = syllable(msg);
  if (syllable_count != 17) {
    //console.log("Syllable count != 17; not a haiku")
    return [];
  }
  msg_match = msg.match(/([\w-']+[^\w-']*)/g);
  //console.log(util.inspect(msg_match));
  first_part = second_part = third_part = 0;
  first_part_string = second_part_string = third_part_string = "";
  msg_match.forEach((word) => {
    if (first_part < 5) {
      first_part += syllable(word);
      first_part_string = first_part_string.concat(word);
    } else if (second_part < 7) {
      second_part += syllable(word);
      second_part_string = second_part_string.concat(word);
    } else {
      third_part += syllable(word);
      third_part_string = third_part_string.concat(word);
    }
  });
  if (first_part === 5 && second_part === 7 && third_part === 5) {
    return [first_part_string, second_part_string, third_part_string];
  } else {
    return [];
  }
}

module.exports.detect = detect
module.exports.format = format
