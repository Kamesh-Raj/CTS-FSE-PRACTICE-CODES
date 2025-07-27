import React, { Component } from "react";

class CountPeople extends Component {
  constructor() {
    super();
    this.state = {
      entrycount: 0,
      exitcount: 0
    };
  }

  updateEntry = () => {
    this.setState((prevState) => ({
      entrycount: prevState.entrycount + 1
    }));
  };

  updateExit = () => {
    this.setState((prevState) => ({
      exitcount: prevState.exitcount + 1
    }));
  };

  render() {
    const containerStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      fontFamily: "Arial"
    };

    const sectionStyle = {
      margin: "0 50px",
      textAlign: "center"
    };

    const buttonStyle = {
      backgroundColor: "lightgreen",
      padding: "10px 20px",
      fontSize: "16px",
      cursor: "pointer"
    };

    const textStyle = {
      marginTop: "10px",
      fontWeight: "bold"
    };

    return (
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <button style={buttonStyle} onClick={this.updateEntry}>Login</button>
          <div style={textStyle}>{this.state.entrycount} People Entered!!!</div>
        </div>

        <div style={sectionStyle}>
          <button style={buttonStyle} onClick={this.updateExit}>Exit</button>
          <div style={textStyle}>{this.state.exitcount} People Left!!!</div>
        </div>
      </div>
    );
  }
}

export default CountPeople;
