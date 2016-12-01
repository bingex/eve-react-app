import React from "react";
import Header from "../components/blocks/Header";
import Helper from "../helpers";

console.log(Helper.shortNum(1239456789));

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>);
  }
}

export default App;