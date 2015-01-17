var Reflux = require('reflux'),
    
    Howl = require('howler').Howl;
    
    SoundActions = require('../actions/SoundActions.js');

var _sounds = {
  metal: new Howl({
    urls: ['../../../sounds/metal.mp3'],
    volume: 0.6
  }),
  metal2: new Howl({
    urls: ['../../../sounds/metal2.mp3'],
    volume: 0.6
  }),
  paper: new Howl({
    urls: ['../../../sounds/paper.mp3'],
    volume: 0.6
  })
};

var SoundStore = Reflux.createStore({
  
  listenables: SoundActions,  //maps actions to handlers bellow
  
  onPlayMetal: function() {
    _sounds.metal2.play();
  },
  
  onPlayPaper: function() {
    _sounds.paper.play();
  },
  
});


module.exports = SoundStore;