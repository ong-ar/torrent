import TableTree, {
  Cell,
  Header,
  Headers,
  Row,
  Rows
} from "@atlaskit/table-tree";
import * as React from "react";

interface IProps {
  data: any;
}

const staticData = [
  {
    description: "Description One",
    title: "Chapter One: Introduction"
  },
  {
    description: "Description Two. This column can span multiple lines.",
    title:
      "Chapter Two: With a Very Very Long Title That Should Be Cut Off Because We Don't Want It To Span Multiple Lines"
  }
];

const Table: React.SFC<IProps> = ({}) => (
  <TableTree>
    <Headers>
      <Header width={300}>Title</Header>
      <Header width={200}>Description</Header>
    </Headers>
    <Rows
      items={staticData}
      render={({ title, description }) => (
        <Row itemId={title} hasChildren={false}>
          <Cell singleLine={true}>{title}</Cell>
          <Cell>{description}</Cell>
        </Row>
      )}
    />
  </TableTree>
);

export default Table;
