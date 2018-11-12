import * as React from "react";
import AdSense from "react-adsense";
import { css } from "react-emotion";
import { CircleLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

const LoadingContainer = styled.div`
  padding-top: 40px;
`;

const AdContainer = styled.div`
  padding-top: 40px;
  margin: 0 auto;
  text-align: center;
`;

const override = css`
  display: block;
  margin: 0 auto;
`;

interface IProps {
  onButtonSubmit?: any;
  onInputChange?: any;
  onKeyPress?: any;
  query: string;
  result?: any;
}

const notify = () => toast.error("Bad Request");

const SearchPresenter: React.SFC<IProps> = ({ onKeyPress, query, result }) => (
  <Container>
    <ToastContainer autoClose={2000} />
    <form method="GET" action="/search">
      <SearchContainer>
        <TextFieldContainer>
          <TextField
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
    <AdContainer>
      <AdSense.Google
        client="ca-pub-3768222384178862"
        slot="3518780361"
        format="auto"
        responsive="true"
        style={{ display: "block" }}
      />
    </AdContainer>
    <TableContainer>
      {result.loading && (
        <LoadingContainer>
          <CircleLoader className={override} color={"#123abc"} />
        </LoadingContainer>
      )}
      {result.data &&
        result.data.GetIp &&
        result.data.GetIp.error &&
        notify() && <div />}
      {result.data && result.data.GetIp && result.data.GetIp.ip_info && (
        <Table
          datas={[
            { key: "ip", value: result.data.GetIp.ip_info.ip },
            { key: "country", value: result.data.GetIp.ip_info.country },
            { key: "city", value: result.data.GetIp.ip_info.city },
            { key: "zip", value: result.data.GetIp.ip_info.zip },
            { key: "ll", value: result.data.GetIp.ip_info.ll.toString() },
            { key: "range", value: result.data.GetIp.ip_info.range.toString() }
          ]}
        />
      )}
    </TableContainer>
  </Container>
);

export default SearchPresenter;
