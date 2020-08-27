import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
    // imageUrl: "https://picsum.photos/200",
  };

  style = {
    fontSize: 15,
    fontWeight: "bold",
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are No tagss</p>; //conditional Rendering
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }}}

  handleIncrement = (product) => {
    this.setState({ count: this.state.count + 1 });
    console.log("Increment Clicked", this.state.count);
  };

  render() {
    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <div>
          <span style={this.style} className={this.getbadge()}>
            {this.formatCount()}
          </span>
          <button
            style={this.style}
            className="btn btn-secondary btn-sm m-2"
            onClick={() => this.handleIncrement()}
          >
            Increment
          </button>
        </div>
        {/* conditional Rendering */}
        {this.state.tags.length === 0 && "Please Create a New tag!"}
        {this.renderTags()}
      </React.Fragment>
    );
  }

  getbadge() {
    let badge = "btn btn-sm m-2 btn-";
    badge += this.formatCount() === "Zero" ? "warning" : "primary";
    return badge;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
