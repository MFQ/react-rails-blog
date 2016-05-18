var Postindex = React.createClass({
  propTypes: {
    posts: React.PropTypes.array
  },

  getInitialState: function() {
    return {posts: this.props.posts};
  },


  handleSavePost: function(post){
    var newPosts = this.state.posts
    newPosts.push(post)
    this.setState({posts: newPosts});
  },

  render: function() {
    var postsDivs = this.state.posts.map(function(p){
      return (
        <Post post={p}/>
      )
    })

    return (
      <div>
        <div>
          <PostForm onSavePost={this.handleSavePost}/>
        </div>

        <h1> Posts </h1>
        <div>{postsDivs}</div>
      </div>
    );
  }
});
