import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import { fetchEventsStartAsync } from "./Redux/Events/eventsAction";
import CharacterPage from "./Pages/CharacterPage/CharacterPage";
import SingleCharacter from "./Components/SingleCharacter/SingleCharacter";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchEventsStartAsync();
    console.log("from app page");
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/character" component={CharacterPage} />
          <Route
            exact
            path={`/character/:characterId`}
            component={SingleCharacter}
          />
        </Switch>
      </div>
    );
  }
}

export default connect(null, { fetchEventsStartAsync })(App);
