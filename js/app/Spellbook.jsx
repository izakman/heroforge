var React = require('react'),
    
    HFRouteWrapper = require('./components/HFRouteWrapper.jsx'),
    HFPage = require('./components/HFPage.jsx'),
    
    mui = require('material-ui'),
    DropDownMenu = mui.DropDownMenu,
    TextField = mui.TextField,
    
    spellData = require('./data/spells.js');


var Spellbook = React.createClass({
  
  getInitialState: function() {
    return {
      className: "",
      searchField: "",
      spellLevel: ""
    };
  },
  
  handleSearch: function() {
    this.setState({searchField: this.refs.searchText.getValue()});
  },
  
  handleClassChange: function(e, selectedIndex, menuItem) {
    this.setState({className: menuItem.payload});
  },
  
  handleLevelChange: function(e, selectedIndex, menuItem) {
    this.setState({spellLevel: menuItem.payload});
  },
  
  render: function() {
    var classes = [
          { payload: '', text: 'On Class List (All)' },
          { payload: 'bard', text: 'Bard' },
          { payload: 'cleric', text: 'Cleric' },
          { payload: 'druid', text: 'Druid' },
          { payload: 'paladin', text: 'Paladin' },
          { payload: 'ranger', text: 'Ranger' },
          { payload: 'sorcerer', text: 'Sorcerer' },
          { payload: 'warlock', text: 'Warlock' },
          { payload: 'wizard', text: 'Wizard' }
        ],
        levels = [
          { payload: '', text: 'Spell Level (All)' },
          { payload: 0, text: 'Cantrip' },
          { payload: 1, text: '1' },
          { payload: 2, text: '2' },
          { payload: 3, text: '3' },
          { payload: 4, text: '4' },
          { payload: 5, text: '5' },
          { payload: 6, text: '6' },
          { payload: 7, text: '7' },
          { payload: 8, text: '8' },
          { payload: 9, text: '9' }
        ],
        spells = spellData.filter(function(spell) {
          var isClass   = (this.state.className === "")   || (spell.class_list[this.state.className] === true),
              isLevel   = (this.state.spellLevel === "")  || (spell.level === this.state.spellLevel),
              hasSearch = (this.state.searchField === "") ||
                          (spell.name.toLowerCase().indexOf(this.state.searchField.toLowerCase()) !== -1);
          
          return (isClass && isLevel && hasSearch);
        }, this);
    
    return (
      <HFRouteWrapper route="spellbook" className="hf-mode page" user={this.props.user} title="Spellbook">
        <HFPage>
          
          <div className="filters">
            <div className="options">
              <DropDownMenu menuItems={classes} value={this.state.className} onChange={this.handleClassChange} />
              <DropDownMenu menuItems={levels} value={this.state.spellLevel} onChange={this.handleLevelChange} />
            </div>
            
            <TextField className="search" ref="searchText" floatingLabelText="Search" hintText="e.g. fireball" onChange={this.handleSearch}/>
          </div>
          
          <ul className="spell-list">
            <li key="header" className="spell-row header">
              <span></span>
              <span className="level">Level</span>
            </li>
            {spells.map(function(spell) {
              return <SpellRow {...spell} key={spell.name}/>;
            })}
          </ul>
          
        </HFPage>
      </HFRouteWrapper>
    );
  }
  
});

module.exports = Spellbook;


var SpellRow = React.createClass({
  render: function() {
    return (
      <li className="spell-row item">
        <span className="name">{this.props.name}</span>
        <span className="level">{this.props.level || "Cantrip"}</span>
      </li>
    );
  }
});