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

  public onButtonSubmit = event => {
    if (this.state.query === "123.123.123.123") {
      console.log("dddd");
      event.preventDefault();
    }
  };

  public render() {
    return (
      <HomePresenter
        onButtonSubmit={this.onButtonSubmit}
        onInputChange={this.onInputChange}
      />
    );
  }
}
export default HomeContainer;
