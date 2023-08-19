import { ReactNode } from "react";

export interface ITableData {
    [key: string]: any;
}

export enum ColumnTextAlign {
    Right = 'Right',
    Left = 'Left',
    Center = 'Center',
}

export interface ITableColumnData {
    key: string;
    label: string | React.ReactNode;
    renderHeader?: (data: ITableColumnData, index: number) => ReactNode;
    renderItem: (data: any, key: string, index: number) => ReactNode;
    width?: string;
    align?: ColumnTextAlign;
    hasAction?: boolean;
}

