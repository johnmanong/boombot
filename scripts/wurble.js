/**/// Description: return a wurble
/**///
/**/// Dependencies: None
/**///
/**/// Author: https://github.com/ggentzke
/**///
/**/// Notes: None
exports.trigger = 'wurble';
exports.listed = true;
exports.script = function(boombot, text, uname, uid, private) {
  //wurble array
  var wurbleList = [
    'wurble!',
    '[WURBLE]',
    'w00rbl3?',
    'no u',
    'John, did you put ' + uname + ' up to this?',
    'OK bark? Yea? Chill!'
  ],
      rndm = Math.floor(Math.random() * wurbleList.length);
  boombot.respond(uid, wurbleList[rndm], private);
}

