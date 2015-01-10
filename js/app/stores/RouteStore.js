var Reflux = require('reflux'),
    // sugar = require('sugar'),
    RouteActions = require('../actions/RouteActions.js');


var _data = {title: "HeroForge"};

var RouteStore = Reflux.createStore({
  
  listenables: RouteActions,  //maps actions to handlers bellow
  
  onSetTitle: function(titleData, replace) {
    if (replace) {
      _data = titleData;
    } else {
      _data.merge(titleData);
    }
    this.trigger(_data);
  },
  
  getRoute: function() {
    return _data;
  }
  
});


module.exports = RouteStore;