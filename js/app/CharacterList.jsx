var React = require('react'),

    mui = require('material-ui'),
    Paper = mui.Paper,
    
    Reflux = require('reflux'),
    CharacterActions = require('./actions/CharacterActions.js'),
    RouteActions = require('./actions/RouteActions.js'),
    
    HFRouteWrapper = require('./components/HFRouteWrapper.jsx');
    HFCharacterListItem = require('./components/HFCharacterListItem.jsx');


var CharacterList = React.createClass({
  
  editCharacter: function(character) {
    CharacterActions.loadCharacter(character, "editor");
  },
  playCharacter: function(character) {
    CharacterActions.loadCharacter(character, "player");
  },
  
  render: function() {
    return (
      <HFRouteWrapper className="hf-mode list" user={this.props.user}>
        {(this.props.user === null) ?
          <div className="login-notice">
            <Paper className="paper" zDepth={2}>
              <div className="inner">Please login to access characters</div>
            </Paper>
          </div>
          :
          <ul>
            {this.props.user.characters.map(function(character) {
              return (
                <li onClick={CharacterActions.loadCharacter.bind(null, character, 'editor')}>
                  <HFCharacterListItem character={character} />
                </li>
              );
            }.bind(this))}
          </ul>
        }
      </HFRouteWrapper>
    );
  }
});

module.exports = CharacterList;