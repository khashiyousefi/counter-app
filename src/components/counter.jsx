import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
    // imageUrl: "https://picsum.photos/200",
  };

  style = {
    fontSize: 14,
    fontWeight: "bold",
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are No tagss</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <div>
          <span className="btn btn-primary btn-sm m-2">
            {this.formatCount()}
          </span>
          <button>Increment</button>
        </div>
        {this.state.tags.length === 0 && "Please Create a New tag!"}
        {this.renderTags()}
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
