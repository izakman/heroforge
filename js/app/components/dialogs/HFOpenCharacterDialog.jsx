var React = require('react'),
    
    mui = require('material-ui'),
    Dialog = mui.Dialog,
    
    HFDialogMixin = require('./HFDialogMixin.js');

var HFOpenCharacterDialog = React.createClass({
  mixins: [HFDialogMixin],
  
  render: function() {
    var dialogActions = [
      { text: 'OK' }
    ];
    return (
      <Dialog ref="dialog" {...this.props} title="New Character" actions={dialogActions}>
        This is a test of a dialog.
      </Dialog>
    );
  }

});

module.exports = HFOpenCharacterDialog;