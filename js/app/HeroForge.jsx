var React = require('react'),
    
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Navigation = Router.Navigation,
    
    Reflux = require('reflux'),
    UserStore   = require('./stores/UserStore.js'),
    RouteActions = require('./actions/RouteActions.js'),
    RouteStore   = require('./stores/RouteStore.js'),
    CharacterStore = require('./stores/CharacterStore.js'),
    SoundStore = require('./stores/SoundStore.js'),
    
    HFMenuBar = require('./components/HFMenuBar.jsx');


var HeroForge = React.createClass({
  mixins: [Navigation,
           Reflux.listenTo(UserStore,"onUserChange"),
           Reflux.listenTo(CharacterStore,"onCharacterChange"),
           Reflux.listenTo(RouteStore,"onRouteChange")],
  
  getInitialState: function() {
    return {
      user: UserStore.getUser(),
      currentCharacter: null,
      route: RouteStore.getRoute()
    };
  },
  
  onUserChange: function(user) {
    this.setState({user: user});
    if (user === null) this.transitionTo('home');
  },
  onCharacterChange: function(character, mode) {
    this.setState({currentCharacter: character});
    if (mode) this.transitionTo(mode);
  },
  
  render: function() {
    return (
      <div id="heroforge">
        <RouteHandler user={this.state.user} character={this.state.currentCharacter} />
      </div>
    );
  }
});

module.exports = HeroForge;