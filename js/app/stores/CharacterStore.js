var Reflux = require('reflux'),
    RouteActions = require('../actions/RouteActions.js'),
    CharacterActions = require('../actions/CharacterActions.js');

var _character = {name: 'Faramir', sex:'male'};

var CharacterStore = Reflux.createStore({
  
  listenables: CharacterActions,  //maps actions to handlers bellow
  
  onLoadCharacter: function(character, mode) {
    _character = character;
    this.trigger(_character, mode);
  },
  
  getCharacter: function() {
    return _character;
  }
  
});


module.exports = CharacterStore;