import TableTree, {
  Cell,
  Header,
  Headers,
  Row,
  Rows
} from "@atlaskit/table-tree";
import * as React from "react";
import ReactCountryFlag from "react-country-flag";

interface IProps {
  datas: any;
}

const Table: React.SFC<IProps> = ({ datas }) => (
  <TableTree>
    <Headers>
      <Header width={200}>Key</Header>
      <Header width={400}>Value</Header>
    </Headers>
    <Rows
      items={datas}
      render={({ key, value }) => (
        <Row itemId={key} hasChildren={false}>
          <Cell singleLine={true}>{key}</Cell>
          <Cell>
            {value}&nbsp;
            {key === 'country'?<ReactCountryFlag code={value}/> : ''}
            {key === 'll'?<a href={"https://www.google.com/maps/@" + value + ",14z"} target="_blank">(Google Map)</a> : ''}
          </Cell>
        </Row>
      )}
    />
  </TableTree>
);

export default Table;
