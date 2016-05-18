var Postindex = React.createClass({
  propTypes: {
    posts: React.PropTypes.array
  },

  render: function() {
    var postsDivs = this.props.posts.map(function(p){
      return (
        <Post post={p}/>
      )
    })

    return (
      <div>
        Post index
        <div>{postsDivs}</div>
      </div>
    );
  }
});
