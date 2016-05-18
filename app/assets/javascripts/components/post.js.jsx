var Post = React.createClass({
  propTypes: {
    post: React.PropTypes.object
  },

  render: function() {
    return (
      <div>
        <div>Title: {this.props.post.title}</div>
        <div> {this.props.post.body } </div>
      </div>
    );
  }
});
