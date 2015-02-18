var React = require('react'),
    
    Reflux = require('reflux'),
    
    DialogStore = require('../stores/DialogStore.js');


var HFDialogManager = React.createClass({
  mixins: [Reflux.listenTo(DialogStore,"onDialogChange")],
  
  getInitialState: function() {
    return {
      dialog: {
        component: null,
        props: {}
      },
      isNew: false
    };
  },
  
  onDialogChange: function(action, dialog) {
    switch (action) {
      case "close": this.refs.dialog.dismiss(); break;
      case "open":  this.setState({dialog:dialog, isNew:true}); break;
    }
  },
  
  componentDidUpdate: function() {
    if (this.state.isNew) this.refs.dialog.show();
  },
  
  onShow: function() {
    this.setState({isNew:false});
  },
  
  onDismiss: function() {},
  
  render: function() {
    var Dialog = this.state.dialog.component;
    return (
      <div id="dialog-container">
        {(Dialog !== null) ?
          <Dialog ref="dialog" {...this.state.dialog.props} onShow={this.onShow} onDismiss={this.onDismiss}/>
          :
          []
        }
      </div>
    );
  }

});

module.exports = HFDialogManager;