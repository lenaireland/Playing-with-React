class Reddit extends React.Component {
  state = {
    posts: []
  }

  componentDidMount() {
    fetch(`https://www.reddit.com/r/reactjs.json`)
      .then(response => {
        response.json().then(data => {
          const posts = data.data.children.map(obj => obj.data);
          // *MUST BE IN AN ARROW FUNCTION (data => ...) FOR NEXT LINE TO WORK!
          // (Arrow function binds *this* so you can access w/in the function)
          this.setState({posts});
        });
      });
  }

  render () {
    return (
      <div>
        <h1>/r/reactjs</h1>
        <ul>
          {this.state.posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<Reddit />, document.getElementById("root"));