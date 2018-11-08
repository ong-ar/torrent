import * as React from "react";
import { Query } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import SearchPresenter from "./SearchPresenter";
import { GET_IP } from "./SearchQueries";

interface IState {
  query: string;
}

interface IProps extends RouteComponentProps<any> {
  location: any;
}

class SearchContainer extends React.Component<IProps, IState> {
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
    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const query = String(params.get("query"));

    return (
      <Query query={GET_IP} variables={{ ip: query }}>
        {({ loading, error, data }) => {
          console.log(data);
          if (loading) {
            return <div>Loading ...</div>;
          }
          if (error) {
            return `Error! ${error.message}`;
          }

          return (
            <SearchPresenter
              onButtonSubmit={this.onButtonSubmit}
              onInputChange={this.onInputChange}
              query={query}
            />
          );
        }}
      </Query>
    );
  }
}
export default SearchContainer;

// data={data.GetTrace.trace.company_id}
