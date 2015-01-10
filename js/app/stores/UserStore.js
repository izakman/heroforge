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
        {name: 'Faramir', sex:'male'},
        {name: 'Galadriel', sex:'female'},
        {name: 'Arras Theirin The Amazing', sex:'male'},
        {name: 'Jim', sex:'male'},
        {name: 'Buttercup', sex:'female'},
        {name: 'Wesley', sex:'male'},
        {name: 'Lord of Everything', sex:'male'},
        {name: 'Sue', sex:'female'},
        {name: 'Trevor', sex:'male'}
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