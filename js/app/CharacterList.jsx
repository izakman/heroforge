var React = require('react'),

    mui = require('material-ui'),
    Paper = mui.Paper,
    
    Navigation = require('react-router').Navigation,
    
    Reflux = require('reflux'),
    CharacterActions = require('./actions/CharacterActions.js'),
    RouteActions = require('./actions/RouteActions.js'),
    
    HFCharacterListItem = require('./components/HFCharacterListItem.jsx');


var CharacterList = React.createClass({
  mixins: [Navigation],
  
  componentWillMount: function() {
    RouteActions.setTitle({title: null}, true);
  },
  
  editCharacter: function(character) {
    CharacterActions.loadCharacter(character, "editor");
  },
  playCharacter: function(character) {
    CharacterActions.loadCharacter(character, "player");
  },
  
  render: function() {
    if (this.props.user === null) {
      return (
        <div className="hf-mode list">
          <div className="login-notice">
            <Paper className="paper" zDepth={2}>
              <div className="inner">Please login to access characters</div>
            </Paper>
          </div>
        </div>
      );
    } else {
      return (
        <div className="hf-mode list">
          <ul>
            {this.props.user.characters.map(function(character) {
              return (
                <li onClick={CharacterActions.loadCharacter.bind(null, character, 'editor')}>
                  <HFCharacterListItem character={character} />
                </li>
              );
            }.bind(this))}
          </ul>
        </div>
      );
    }
  }
});

module.exports = CharacterList;