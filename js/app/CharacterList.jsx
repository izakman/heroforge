var React = require('react'),

    mui = require('material-ui'),
    Paper = mui.Paper,
    
    Reflux = require('reflux'),
    CharacterActions = require('./actions/CharacterActions.js'),
    RouteActions = require('./actions/RouteActions.js'),
    DialogActions = require('./actions/DialogActions.js'),
    
    HFOpenCharacterDialog = require('./components/dialogs/HFOpenCharacterDialog.jsx'),
    
    HFRouteWrapper = require('./components/HFRouteWrapper.jsx'),
    HFCharacterListItem = require('./components/HFCharacterListItem.jsx');


var CharacterList = React.createClass({
  
  editCharacter: function(character) {
    CharacterActions.loadCharacter(character, "editor");
  },
  playCharacter: function(character) {
    CharacterActions.loadCharacter(character, "player");
  },
  
  newCharacterBox: function() {
    DialogActions.open({
      component: HFOpenCharacterDialog,
      props: {}
    });
  },
  
  render: function() {
    return (
      <HFRouteWrapper className="hf-mode list" user={this.props.user}>
        {(this.props.user) ?
          <ul>
            <li onTouchTap={this.newCharacterBox}>
              <HFCharacterListItem newCreator={true} character={{name:'New Character'}} />
            </li>
            {this.props.user.characters.map(function(character) {
              return (
                <li onTouchTap={CharacterActions.loadCharacter.bind(null, character, 'editor')}>
                  <HFCharacterListItem character={character} />
                </li>
              );
            }.bind(this))}
          </ul>
          :
          <div className="login-notice">
            <Paper className="paper" zDepth={2}>
              <div className="inner">Please login to access characters</div>
            </Paper>
          </div>
        }
      </HFRouteWrapper>
    );
  }
});

module.exports = CharacterList;