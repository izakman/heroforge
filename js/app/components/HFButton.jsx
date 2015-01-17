var React = require('react'),

    mui = require('material-ui'),
    RaisedButton = mui.RaisedButton,
    
    SoundActions = require('../actions/SoundActions.js');

var HFButton = React.createClass({
    
  buttonClick: function () {
    SoundActions.playMetal();
    this.props.onTouchTap();
  },

  render: function() {
    return (
      <RaisedButton {...this.props} onTouchTap={this.buttonClick} />
    );
  }

});

module.exports = HFButton;