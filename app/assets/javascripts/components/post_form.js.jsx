var PostForm = React.createClass({

	getInitialState: function() {
    return {title: '', body: ''};
  },

  handleTitleChange: function(event){
  	this.setState({title: event.target.value});
  },

  handleBodyChange: function(event){
  	this.setState({body: event.target.value});
  },

  savePost: function(event){

  	this.props.onSavePost({ title:this.state.title, body:this.state.body});
  	$.ajax("/posts", {
  		method:"POST",
  		data: {
  			posts:{
  				title:this.state.title,
  				body:this.state.body
  			}
  		},
  		success: function(data){}
  	})
  },

  render: function() {
    return (
    	<div>
    		<h1> Post form </h1>
    			Title: <input type="text" value={this.state.title} onChange={this.handleTitleChange} /> <br/>
    			Body: <input type="text" value={this.state.body} onChange={this.handleBodyChange} /> <br/>
   		 		<input type="button" onClick={this.savePost} value="save" />
    	</div>
    );
  }
});
