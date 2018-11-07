import * as React from "react";
import { Query } from "react-apollo";
import SearchPresenter from "./SearchPresenter";
import { GET_TRACE } from "./SearchQueries";

class SearchContainer extends React.Component {
  public render() {
    return (
      <Query query={GET_TRACE}>
        {({ loading, error, data }) => {
          console.log(data);
          if (loading) {
            return <div>Loading ...</div>;
          }
          if (error) {
            return `Error! ${error.message}`;
          }

          return <SearchPresenter />;
        }}
      </Query>
    );
  }
}
export default SearchContainer;

// data={data.GetTrace.trace.company_id}
