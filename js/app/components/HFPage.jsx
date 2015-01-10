var React = require('react'),

    mui = require('material-ui'),
    Paper = mui.Paper;

var HFPage = React.createClass({

  render: function() {
    return (
      <div className="hf-mode page">
        <Paper className="paper" zDepth={2}>
          <div className="inner">
            {this.props.children}
          </div>
        </Paper>
      </div>
    );
  }

});

module.exports = HFPage;