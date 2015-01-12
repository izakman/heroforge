var Reflux = require('reflux'),
    UserActions = require('../actions/UserActions.js'),
    RouteActions = require('../actions/RouteActions.js');


var _user = null;

var UserStore = Reflux.createStore({
  
  listenables: UserActions,  //maps actions to handlers bellow
  
  onLogin: function(email, password) {
    _user = {
      name: 'Bob',
      characters: [
        {name: 'Faramir',       sex:'male',      system:'Pathfinder', level:1},
        {name: 'Galadriel',     sex:'female',    system:'D&D 5th',    level:4},
        {name: 'Arras Theirin', sex:'male',      system:'D&D 5th',    level:1},
        {name: 'Jim',           sex:'male',      system:'Pathfinder', level:2},
        {name: 'Buttercup',     sex:'female',    system:'D&D 5th',    level:1},
        {name: 'Wesley',        sex:'male',      system:'Pathfinder', level:3},
        {name: 'Lord of Everything', sex:'male', system:'D&D 5th',    level:5},
        {name: 'Sue',           sex:'female',    system:'Pathfinder', level:4},
        {name: 'Trevor',        sex:'male',      system:'Pathfinder', level:3}
      ]
    };
    this.trigger(_user);
  },
  onLogout: function() {
    _user = null;
    this.trigger(_user);
  },
  
  getUser: function() {
    return  _user;
  },
  isLoggedIn: function() {
    return (_user !== null);
  }
  
});


module.exports = UserStore;