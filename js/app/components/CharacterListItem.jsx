var React = require('react'),

    mui = require('material-ui'),
    Paper = mui.Paper,
    
    AvatarImage = require('./AvatarImage.jsx');

var CharacterListItem = React.createClass({
  
  render: function() {
    return (
      <div className="list-item">
        <Paper className="avatar" zDepth={2} circle={true}>
          <AvatarImage img={this.props.character.portrait} sex={this.props.character.sex}/>
        </Paper>
        <Paper className="name paper" zDepth={2}>
          <div className="inner">{this.props.character.name}</div>
        </Paper>
      </div>
    );
  }

});

module.exports = CharacterListItem;