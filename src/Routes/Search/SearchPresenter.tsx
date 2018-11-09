import * as React from "react";
import Button from "../../Components/Button";
import Table from "../../Components/Table";
import TextField from "../../Components/TextField";
import styled from "../../typed-components";

const Container = styled.div`
  width: 600px;
  margin: 0 auto;
`;

const SearchContainer = styled.div`
  width: 500px;
  margin: 0 auto;
  display: flex;
`;

const TextFieldContainer = styled.div`
  width: 100%;
`;

const ButtonContainer = styled.div`
  width: 150px
  display: inline-block;
  align-self: flex-end;
  padding-bottom: 2px;
`;

const TableContainer = styled.div`
  padding-top: 40px;
`;

interface IProps {
  onButtonSubmit: any;
  onInputChange: any;
  onKeyPress: any;
  query: string;
  result?: any;
}

const SearchPresenter: React.SFC<IProps> = ({
  onButtonSubmit,
  onInputChange,
  onKeyPress,
  query,
  result
}) => (
  <Container>
    <form method="GET" action="/search" onSubmit={onButtonSubmit}>
      <SearchContainer>
        <TextFieldContainer>
          <TextField
            onChange={onInputChange}
            shouldFitContainer={true}
            required={true}
            value={query}
            onKeyPress={onKeyPress}
            pattern="^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"
            name="query"
            label="IP Address"
          />
        </TextFieldContainer>
        <ButtonContainer>
          <Button
            html="search"
            appearance="primary"
            shouldFitContainer={true}
            type="submit"
          />
        </ButtonContainer>
      </SearchContainer>
    </form>
    <TableContainer>
      {result.loading && <div>loading...</div>}
      {result.data && result.data.GetIp && result.data.GetIp.error && (
        <div>error</div>
      )}
      {result.data && result.data.GetIp && result.data.GetIp.ip_info && (
        <Table data={result.data.GetIp.ip_info} />
      )}
    </TableContainer>
  </Container>
);

export default SearchPresenter;
