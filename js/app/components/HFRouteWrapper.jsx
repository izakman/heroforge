var React = require('react'),
    
    HFDialogManager = require('./HFDialogManager.jsx'),
    HFMenuBar = require('./HFMenuBar.jsx');


var HFRouteWrapper = React.createClass({

  render: function() {
    return (
      <div className={this.props.route}>
        <HFMenuBar showBack={this.props.showBack} user={this.props.user} title={this.props.title} subtitle={this.props.subtitle} />
        
        <div className="main-wrapper">
          <div className={this.props.className}>
            {this.props.children}
          </div>
        </div>
        
        <HFDialogManager />
      </div>
    );
  }

});

module.exports = HFRouteWrapper;