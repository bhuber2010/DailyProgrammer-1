var challenge = require('../robots.js');

challenge(rl,)

function move(r){
   if(r < m) {
    for (var r = 0; r < m; r++) {
      Robot.moveOne(right);
    };
    Robot.moveOne(right);
  } else if(r > m) {
    for (var r = 0; r > m ; r--) {
      Robot.moveOne(left);
    };
    Robot.moveOne(left);
  } else {
    Robot.onMarker();
  }
}
