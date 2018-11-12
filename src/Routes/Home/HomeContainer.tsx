import * as React from "react";
import HomePresenter from "./HomePresenter";

interface IState {
  query: string;
}

class HomeContainer extends React.Component<IState> {
  public state = {
    query: ""
  };

  public onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value }
    } = event;
    this.setState({
      [name]: value
    } as any);
  };

  public onKeyPress = (event: React.KeyboardEvent<KeyboardEvent>) => {
    if (event.key === "Enter") {
      return true;
    }
    return false;
  };

  public onButtonSubmit = event => {
    if (this.state.query === "") {
      event.preventDefault();
    }
  };

  public render() {
    return (
      <HomePresenter
        onButtonSubmit={this.onButtonSubmit}
        onInputChange={this.onInputChange}
        onKeyPress={this.onKeyPress}
      />
    );
  }
}
export default HomeContainer;
