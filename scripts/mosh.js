/**/// Description: Bring the mosh
/**///
/**/// Dependencies: none
/**///
/**/// Author: https://github.com/johnmanong
/**///
/**/// Notes: None
exports.trigger = '/mosh';
exports.listed = true;
exports.script = function(boombot, text, uname, uid, private) {
    var rndm = Math.floor(Math.random() * 3),
      responses = [
        'I will windmill kick you in the face!',
        'I <3 breakdowns',
        'It\'s time for some dinosaur brocore',
      ];
    boombot.bot.bop();
    boombot.respond(uid, responses[rndm], private);
  }
}
  
