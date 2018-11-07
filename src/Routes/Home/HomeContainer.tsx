import * as React from "react";
import HomePresenter from "./HomePresenter";

interface IState {
  ip_invalid: boolean;
  ip_address: string;
}

class HomeContainer extends React.Component<IState> {
  public state = {
    ip_address: "",
    ip_invalid: true
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
    if (this.state.ip_address === "d") {
      console.log("dddd");
      event.preventDefault();
    }
  };

  public render() {
    return (
      <HomePresenter
        onButtonSubmit={this.onButtonSubmit}
        onInputChange={this.onInputChange}
        val="aaa"
      />
    );
  }
}
export default HomeContainer;
