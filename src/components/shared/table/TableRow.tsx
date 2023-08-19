import { useCallback } from "react";
import styled from "styled-components";

import { ColumnTextAlign, ITableColumnData, ITableData } from "../../../types/table";

interface IProps {
    index: number;
    data: ITableData[];
    columns: ITableColumnData[];
    onRowClick?: (data: ITableData) => void;
}

const TableRow: React.FC<IProps> = ({
    index,
    data,
    columns,
    onRowClick,
}) => {
    const selectedData = data[index];

    const handleRowClick = useCallback(() => {
        onRowClick?.(selectedData);
      }, [selectedData, onRowClick]);

    return (
        <TableRowStyled
            canClick={!!onRowClick}
        >
            {columns.map(({ key, align, hasAction, renderItem }) => (
                <TableRowCol
                    key={`body-${key}`}
                    textAlign={align}
                    onClick={(!hasAction) ? handleRowClick : undefined}
                >
                { renderItem(selectedData, key, index) }
            </TableRowCol>))}
        </TableRowStyled>
    );
}

export default TableRow;

const TableRowStyled = styled.tr<{ canClick: boolean; isSelected?: boolean }>`
    cursor: ${({ canClick }) => (canClick ? 'pointer' : 'default')};
    background-color: #f9fafb;

    &:nth-child(even) {
    background-color: #fff;
    }

    &:hover {
    background-color: #eff2f6;
    }
`

const TableRowCol = styled.td<{ textAlign?: ColumnTextAlign; padding?: string }>`
    font-size: 16px;
    line-height: 24px;
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
`