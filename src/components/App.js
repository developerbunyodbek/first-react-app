import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };

  addResetRemoveOne = (value) => {
    this.setState({ count: value });
  };

  render() {
    let date = new Date();
    let year = date.getFullYear();
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="card">
                <div className="card-header">
                  <h1>Sodda Counter👀</h1>
                </div>
                <div className="card-body">
                  <h2>Count: {this.state.count}</h2>
                </div>
                <div className="card-footer">
                  <button
                    className="btn btn-success"
                    onClick={() => this.addResetRemoveOne(this.state.count + 1)}
                  >
                    Add +1
                  </button>
                  <button
                    className="btn btn-primary m-2"
                    onClick={() => this.addResetRemoveOne(0)}
                  >
                    Reset
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.addResetRemoveOne(this.state.count - 1)}
                  >
                    Remove -1
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p
            style={{
              position: "absolute",
              bottom: 0,
              transform: "translateX(-50%)",
              left: "50%",
            }}
          >
            &copy; Copyright Reserved {year} by Bunyodbek
          </p>
        </div>
      </div>
    );
  }
}

export default App;
