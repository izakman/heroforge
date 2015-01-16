var React = require('react'),

    mui = require('material-ui'),
    RaisedButton = mui.RaisedButton;

var HFButton = React.createClass({
    
  buttonClick: function () {
    this.props.onTouchTap();
  },

  render: function() {
    return (
      <RaisedButton {...this.props} onTouchTap={this.buttonClick} />
    );
  }

});

module.exports = HFButton;