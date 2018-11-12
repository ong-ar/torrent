import * as React from "react";
import { Query } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import SearchPresenter from "./SearchPresenter";
import { GET_IP } from "./SearchQueries";

interface IProps extends RouteComponentProps<any> {
  location: any;
}

class SearchContainer extends React.Component<IProps> {
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

  public render() {
    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const query = String(params.get("query"));

    return (
      <Query query={GET_IP} variables={{ ip: query }}>
        {({ loading, error, data }) => {
          console.log(data);

          return (
            <SearchPresenter
              onInputChange={this.onInputChange}
              onKeyPress={this.onKeyPress}
              query={query}
              result={{ loading, error, data }}
            />
          );
        }}
      </Query>
    );
  }
}
export default SearchContainer;
