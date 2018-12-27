import AtlasTableTree from "@atlaskit/table-tree";
import * as React from "react";

interface IProps {
  headers: string[];
  columns?: any;
  columnWidths: string[];
  items?: any;
}

const TableTree: React.SFC<IProps> = ({
  headers = [],
  columns = [],
  columnWidths = [],
  items = []
}) => (
  <AtlasTableTree
    headers={headers}
    columns={columns}
    columnWidths={columnWidths}
    items={items}
  />
);

export default TableTree;
