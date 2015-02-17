var React = require('react'),

    Navigation = require('react-router').Navigation,
    
    mui = require('material-ui'),
    Paper = mui.Paper,
    
    UserActions  = require('../actions/UserActions.js'),
    RouteActions = require('../actions/RouteActions.js'),
    
    HFMenuBarTitle = require('./HFMenuBarTitle.jsx'),
    HFButton = require('./HFButton.jsx');

var HFMenuBar = React.createClass({
  mixins: [Navigation],
  
  render: function() {
    
    return (
      <Paper id="pf-menubar" className="menubar paper" zDepth={2} rounded={false} >
        <div className="inner">
          <div className="left-group">
            {(this.props.showBack) ? 
              <HFButton label="Back" primary={true} onTouchTap={this.goBack} className="menu-button main"/>
              :
              []
            }
          </div>
          
          <HFMenuBarTitle title={this.props.title} subtitle={this.props.subtitle} />
          
          <div className="right-group menu-options">
            {(this.props.user) ?
              <HFButton label="Logout" primary={true} className="menu-button" onTouchTap={UserActions.logout}/>
              :
              <HFButton label="Login" primary={true} className="menu-button" onTouchTap={UserActions.login}/>
            }
          </div>
        </div>
      </Paper>
    );
  }

});

module.exports = HFMenuBar;