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
                return <IosPower fontSize="40px" color="green" beat={true} />;
              } else {
                return <IosPower fontSize="40px" color="red" shake={true} />;
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
        설명<br />
      </DescriptionContainer>
    </Container>
  );
};

export default HomePresenter;
