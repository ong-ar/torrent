import * as React from "react";
import Button from "../../Components/Button";
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

interface IProps {
  onButtonSubmit: any;
  onInputChange: any;
}

const HomePresenter: React.SFC<IProps> = ({
  onButtonSubmit,
  onInputChange
}) => (
  <Container>
    <form method="GET" action="/search" onSubmit={onButtonSubmit}>
      <SearchContainer>
        <TextFieldContainer>
          <TextField
            onChange={onInputChange}
            shouldFitContainer={true}
            required={true}
            value=""
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
  </Container>
);

export default HomePresenter;
