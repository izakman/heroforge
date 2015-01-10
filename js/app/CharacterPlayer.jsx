var React = require('react'),
    
    Navigation = require('react-router').Navigation,
    
    Reflux = require('reflux'),
    UserStore = require('./stores/UserStore.js'),
    CharacterActions = require('./actions/CharacterActions.js'),
    RouteActions = require('./actions/RouteActions.js'),
    
    HFPage = require('./components/HFPage.jsx');


var CharacterPlayer = React.createClass({
  mixins: [Navigation],
  
  statics: {
    willTransitionTo: function (transition) {
      if (!UserStore.isLoggedIn()) transition.redirect("home");
    }
  },
  
  componentWillMount: function() {
    RouteActions.setTitle({title: this.props.character.name, subtitle: "Play Mode"});
  },
   
  render: function() {
    var character = this.props.character;
    return (
      <HFPage>
        <p><a onClick={this.goBack}>Back</a></p>
        
        {(this.props.character) ?
            <p>Playing a character called {character.name}</p>
            :
            <p>Error, can't load character</p>}
      </HFPage>
    );
  }
  
});

module.exports = CharacterPlayer;