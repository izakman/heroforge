var React = require('react'),

    Navigation = require('react-router').Navigation,
    
    mui = require('material-ui'),
    Paper      = mui.Paper,
    RaisedButton = mui.RaisedButton,
    
    UserActions  = require('../actions/UserActions.js'),
    RouteActions = require('../actions/RouteActions.js'),
    
    HFMenuBarTitle = require('./HFMenuBarTitle.jsx');

var HFMenuBar = React.createClass({
  mixins: [Navigation],
  
  render: function() {
    
    return (
      <Paper id="pf-menubar" className="paper" zDepth={2} rounded={false} >
        <div className="inner">
          <div className="left-group">
            {(this.props.title) ?
              <RaisedButton label="Back" primary={true} onClick={this.goBack} className="menu-button main"/>
              :
              []
            }
          </div>
          
          <HFMenuBarTitle title={this.props.title} subtitle={this.props.subtitle} />
          
          <div className="right-group menu-options">
            {(this.props.user) ?
              <RaisedButton label="Logout" primary={true} className="menu-button" onClick={UserActions.logout}/>
              :
              <RaisedButton label="Login" primary={true} className="menu-button" onClick={UserActions.login}/>
            }
          </div>
        </div>
      </Paper>
    );
  }

});

module.exports = HFMenuBar;