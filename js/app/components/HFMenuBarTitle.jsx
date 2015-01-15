var React = require('react');

var HFMenuBarTitle = React.createClass({

  render: function() {
    if (this.props.subtitle) {
      return (
        <div className="title has-sub">
          <div className="primary">{this.props.title}</div>
          <div className="subtitle">{this.props.subtitle}</div>
        </div>
      );
    } else if (this.props.title) {
      return (
        <div className="title">
          <div>{this.props.title}</div>
        </div>
      );
    } else {
      return (
        <div className="title">
          <img src="images/hf-logo-title.png"/>
        </div>
      );
    }
  }

});

module.exports = HFMenuBarTitle;