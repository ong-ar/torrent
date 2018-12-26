import * as React from "react";
import AdSense from "react-adsense";
import Button from "../../Components/Button";
import TextField from "../../Components/TextField";
import searchLogo from "../../images/search.svg";
import styled from "../../typed-components";

const Container = styled.div`
  width: 600px;
  margin: 0 auto;
  margin-top: 100px;
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

const LogoContainer = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const AdContainer = styled.div`
  padding-top: 40px;
  margin: 0 auto;
  text-align: center;
`;

interface IProps {
  onClick: any;
  onInputChange: any;
  onKeyPress: any;
}

const HomePresenter: React.SFC<IProps> = ({
  onClick,
  onInputChange,
  onKeyPress
}) => (
  <Container>
    <LogoContainer>
      <img src={searchLogo} style={{ width: "300px" }} />
    </LogoContainer>
    <SearchContainer>
      <TextFieldContainer>
        <TextField
          onChange={onInputChange}
          shouldFitContainer={true}
          required={true}
          onKeyPress={onKeyPress}
          value=""
          name="query"
          label="Keyword"
        />
      </TextFieldContainer>
      <ButtonContainer>
        <Button
          html="search"
          appearance="primary"
          onClick={onClick}
          shouldFitContainer={true}
          type="button"
        />
      </ButtonContainer>
    </SearchContainer>
    <AdContainer>
      <AdSense.Google
        client="ca-pub-3768222384178862"
        slot="3518780361"
        format="auto"
        responsive="true"
        style={{ display: "block" }}
      />
    </AdContainer>
  </Container>
);

export default HomePresenter;
