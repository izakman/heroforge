var React = require('react'),
    
    HFMenuBar = require('./HFMenuBar.jsx');


var HFRouteWrapper = React.createClass({

  render: function() {
    return (
      <div>
        <HFMenuBar user={this.props.user} title={this.props.title} subtitle={this.props.subtitle} />
        
        <div className="main-wrapper">
          <div className={this.props.className}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }

});

module.exports = HFRouteWrapper;