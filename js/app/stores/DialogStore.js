var Reflux = require('reflux'),
    // sugar = require('sugar'),
    DialogActions = require('../actions/DialogActions.js');

var _data = null;

var DialogStore = Reflux.createStore({
  
  listenables: DialogActions,  //maps actions to handlers bellow
  
  onOpen: function(dialog) {
    this.trigger('open', dialog);
  },
  
  onClose: function() {
    this.trigger('close');
  },
  
  // onMakeSelection : function(data) {
  //   _data = data;
  //   this.trigger('selection', _data);
  // },
  
  // getData: function() {
  //   return _data;
  // },
  
});


module.exports = DialogStore;