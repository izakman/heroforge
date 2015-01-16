var React = require('react'),

    mui = require('material-ui'),
    Paper = mui.Paper,
    
    HFAvatarImage = require('./HFAvatarImage.jsx');

var HFCharacterListItem = React.createClass({
  
  render: function() {
    var newClass = (this.props.newCreator) ? "new" : " ";
    return (
      <div className={"list-item " + newClass}>
        <Paper className="avatar" zDepth={2} circle={true}>
          {(this.props.newCreator) ?
            <div className="plus">+</div>
            :
            <HFAvatarImage img={this.props.character.portrait} sex={this.props.character.sex}/>
          }
        </Paper>
        <Paper className="info paper" zDepth={2}>
          <div className="inner">
            <div className="name">{this.props.character.name}</div>
            <div  className="details">
              <span className="level">LVL {this.props.character.level || 0}</span>
              <span className="system">{this.props.character.system || ' '}</span>
            </div>
          </div>
        </Paper>
      </div>
    );
  }

});

module.exports = HFCharacterListItem;