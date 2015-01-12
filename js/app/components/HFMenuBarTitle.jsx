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
    } else if (this.props.title === null) {
      return (
        <div className="title">
          <img src="images/pf-logo-title.png"/>
        </div>
      );
    } else {
      return (
        <div className="title">
          <div>{this.props.title}</div>
        </div>
      );
    }
  }

});

module.exports = HFMenuBarTitle;