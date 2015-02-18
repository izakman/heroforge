var React = require('react'),
    
    mui = require('material-ui'),
    Dialog = mui.Dialog,
    
    HFDialogMixin = require('./HFDialogMixin.js');

var HFSpellDialog = React.createClass({
  mixins: [HFDialogMixin],
  
  render: function() {
    var spell = this.props,
        type = (this.props.level) ?
          '{l}-level {s}{r}'.assign({
              l: spell.level.ordinalize(),
              s: spell.school.toLowerCase(),
              r: ((spell.ritual) ? ' (ritual)' : '')
            })
          :
          '{1} cantrip'.assign(spell.school);

    var dialogActions = [
      { text: 'OK' }
    ];
    return (
      <Dialog className="dialog spell" ref="dialog" {...this.props} title={spell.name} actions={dialogActions}>
        <p className="type">{type}</p>
        <ul className="details">
          <li>
            <span className="name">Casting Time: </span>
            <span>{spell.casting_time}</span>
          </li>
          <li>
            <span className="name">Range: </span>
            <span>{spell.range}</span>
          </li>
          <li>
            <span className="name">Components: </span>
            <span>{spell.components.replace(/,/g, ', ')}</span>
          </li>
          <li>
            <span className="name">Duration: </span>
            <span>{spell.casting_time}</span>
          </li>
        </ul>
        <p className="description">
          {spell.description}
        </p>
      </Dialog>
    );
  }

});

module.exports = HFSpellDialog;