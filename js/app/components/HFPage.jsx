var React = require('react'),

    mui = require('material-ui'),
    Paper = mui.Paper;

var HFPage = React.createClass({

  render: function() {
    return (
      <Paper className="paper" zDepth={2}>
        <div className="inner">
          {this.props.children}
        </div>
      </Paper>
    );
  }

});

module.exports = HFPage;