import React from "react";
class AriaStark extends React.Component {
  state = {
    count: 0
  };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (


  <div className="card">
    <div className="img-container">
      <img
        alt="Aria Stark"
        src= "https://sp.yimg.com/ib/th?id=OIP.m7que0LgkLmbiJFjKJEOBAHaE7&pid=15.1&rs=1&c=1&qlt=95&w=154&h=102"
        onClick={this.handleIncrement} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> Aria Stak
        </li>
        <li>
          <strong>Occupation:</strong> Assassin
        </li>
        <li>
          <strong>Location:</strong> the North
        </li>
      </ul>
    </div>
  </div>
    );
  }
}



export default AriaStark;
