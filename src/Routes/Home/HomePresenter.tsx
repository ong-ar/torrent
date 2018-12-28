import {
  AtlaskitThemeProvider,
  elevation as AkElevations,
  themed
} from "@atlaskit/theme";
import * as React from "react";
import IosPower from "react-ionicons/lib/IosPower";
import Button from "../../Components/Button";
import TableTree from "../../Components/Table";
import TextField from "../../Components/TextField";
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

const ConnectInfoContainer = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  text-align: center;
`;

const UpdateInfoContainer = styled.div`
  margin: 0 auto;
  text-align: right;
`;

const DescriptionContainer = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  text-align: left;
`;

const Box = styled.div`
  ${({ elevation }) => AkElevations[elevation]}
  background-color: ${() => themed({ light: "white", dark: "#283447" })};
  border-radius: 3px;
  margin-bottom: 2em;
  min-width: 240px;
  padding: 16px 24px;
  text-align: center;
`;

interface IProps {
  onClick: any;
  onInputChange: any;
  onKeyPress: any;
  list: any[];
  date: string;
}

const HomePresenter: React.SFC<IProps> = ({
  onClick,
  onInputChange,
  onKeyPress,
  list,
  date
}) => {
  return (
    <Container>
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
      <ConnectInfoContainer>
        <TableTree
          headers={["Status", "Name", "Host"]}
          columns={[
            item => {
              if (item.status) {
                return <IosPower fontSize="25px" color="green" beat={true} />;
              } else {
                return <IosPower fontSize="25px" color="red" shake={true} />;
              }
            },
            item => item.name,
            item => {
              return (
                <a href={item.host} target="_blank">
                  {item.host}
                </a>
              );
            }
          ]}
          columnWidths={["200px", "200px", "200px"]}
          items={list.map((item, index) => {
            return {
              children: [],
              content: {
                host: item.host,
                name: item.name,
                status: item.status
              },
              hasChildren: false
            };
          })}
        />
      </ConnectInfoContainer>
      <UpdateInfoContainer>{date} 기준</UpdateInfoContainer>

      <DescriptionContainer>
        <AtlaskitThemeProvider mode="light">
          <Box elevation="e100">
            - 브라우저 내에서 위 리스트 서버 상태 확인
            <br />- search 는 서버가 On 인 사이트 중 무작위로 선택 검색 진행
          </Box>
        </AtlaskitThemeProvider>
      </DescriptionContainer>
    </Container>
  );
};

export default HomePresenter;
