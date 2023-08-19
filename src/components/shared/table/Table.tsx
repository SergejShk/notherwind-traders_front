import { ReactNode } from "react";
import styled from "styled-components";

import TableRow from "./TableRow";

import { ColumnTextAlign, ITableColumnData, ITableData } from "../../../types/table";

interface IProps {
    data: ITableData[];
    columns: ITableColumnData[];
    renderEmpty?: () => ReactNode;
    onRowClick?: (row: any) => void;
}

const Table: React.FC<IProps> = ({
    data,
    columns,
    renderEmpty,
    onRowClick,
}) => {
    const isEmpty = !!data && !data.length;
   
    return (
        <TableStyled>
            <TableHead>
                <tr>
                    {columns.map((item: ITableColumnData, index: number) => {
                        const key = `head-${item.key}`;
                        const style = { width: item.width };

                        return (
                            <HeaderCol key={key} style={style}>
                                {item.renderHeader?.(item, index)}
                            </HeaderCol>
                        )
                    })}
                </tr> 
            </TableHead>

            <BodyBlock className="body-block">
                {isEmpty && (
                    <EmptyRow>
                        <EmptyCol colSpan={columns.length}>
                            {renderEmpty?.()}
                        </EmptyCol>
                    </EmptyRow>
                )}

                {!isEmpty && data?.map((_, index) => (
                    <TableRow
                        key={index}
                        data={data}
                        columns={columns}
                        index={index}
                        onRowClick={onRowClick}
                    />
                ))}
            </BodyBlock>
        </TableStyled>
    );
}

export default Table;

const TableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 0%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 0%);
`;

const TableHead = styled.thead`
  background-color: #fff;
`;

const HeaderCol = styled.th<{ textAlign?: ColumnTextAlign; padding?: string }>`
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: #000;
  padding: ${({ padding }) => padding || '8px 12px'};
  text-align: ${({ textAlign }) => {
    switch (textAlign) {
      case ColumnTextAlign.Right:
        return 'right';
      case ColumnTextAlign.Center:
        return 'center';
      default:
        return 'left';
    }
  }};
`;

const BodyBlock = styled.tbody``;

const EmptyRow = styled.tr``;

const EmptyCol = styled.td``;
