var React = require('react'),
    
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Navigation = Router.Navigation,
    
    Reflux = require('reflux'),
    UserStore   = require('./stores/UserStore.js'),
    RouteActions = require('./actions/RouteActions.js'),
    RouteStore   = require('./stores/RouteStore.js'),
    CharacterStore = require('./stores/CharacterStore.js'),
    
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
  onRouteChange: function(route) {
    this.setState({route: route});
  },
  
  render: function() {
    return (
      <div id="heroforge">
        <HFMenuBar user={this.state.user} title={this.state.route.title} subtitle={this.state.route.subtitle} />
        
        {/*<ul>
          <li><a onClick={RouteActions.goToList}>Characters</a></li>
          <li><a onClick={RouteActions.goToEditor}>Editor</a></li>
          <li><a onClick={RouteActions.goToPlayer}>Player</a></li>
        </ul>*/}
        
        <div className="main-wrapper">
          <RouteHandler user={this.state.user} character={this.state.currentCharacter} />
        </div>
        
      </div>
    );
  }
});

module.exports = HeroForge;