import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);

    //Initializing the state

    this.state = { color: "Red" };
  }

  componentDidMount() {
    //changing the state after 2 sec from the time when the component is rendered

    setTimeout(() => {
      this.setState({ color: "white" });
    }, 2000);
  }

  render() {
    return (
      <div>
        <p
          style={{
            color: this.state.color,
            backgroundColor: "#060c21",
            textAlign: "center",
            fontSize: "200px",
            width: "100%",
            height: "100vh",
            margin: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Bharti Kumari
        </p>
      </div>
    );
  }
}

export default App;
