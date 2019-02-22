import React from "react";
import RecordList from "./record/list.js";
import If from "./If.js";
import style from "./record/record.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { model: null };
  }

  showRecords = model => {
    this.setState({ model });
  };

  render() {
    return (
      <div>
        <h2>Display Enteries</h2>
        <button onClick={() => this.showRecords("players")}>Players</button>
        <button onClick={() => this.showRecords("teams")}>Teams</button>
        <hr />
        <If condition={this.state.model}>
          <RecordList model={this.state.model} />
        </If>
      </div>
    );
  }
}

export default App;
