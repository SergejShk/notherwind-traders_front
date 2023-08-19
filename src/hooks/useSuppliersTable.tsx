import { useCallback, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import Initials from "../components/shared/initials/Initials";

import { SupplierType } from "../types/suppliersTypes";
import { ITableColumnData } from "../types/table";

export enum TableColumn {
    Avatar = 'avatar',
    Company = 'company',
    Contact = 'contact',
    Title = 'title',
    City = 'city',
    Country = 'country',
  }

export default function useSuppliersTable<D extends SupplierType>() {
    const navigate = useNavigate();
    const location = useLocation();

    const tableListColumn: { [key in TableColumn]: string } = useMemo(
        () => ({
                [TableColumn.Avatar]: '5%',
                [TableColumn.Company]: '27%',
                [TableColumn.Contact]: '21%',
                [TableColumn.Title]: '24%',
                [TableColumn.City]: '12%',
                [TableColumn.Country]: '12%',
            }),
        [],
    );
    
    const columns = useMemo<ITableColumnData[]>(() => [
        {
            key: TableColumn.Avatar,
            label: "Avatar",
            width: tableListColumn[TableColumn.Avatar],
            renderItem: (item: D) => <Initials fullName={item.ContactName} />,
        },
        {
            key: TableColumn.Company,
            label: "Company",
            width: tableListColumn[TableColumn.Company],
            renderHeader: (
              item: { label: string | React.ReactNode },
            ) => <TableTitle>{item.label}</TableTitle>,
            renderItem: (item: D) => <Item>{item.CompanyName}</Item>,
        },
        {
            key: TableColumn.Contact,
            label: "Contact",
            width: tableListColumn[TableColumn.Contact],
            renderHeader: (
              item: { label: string | React.ReactNode },
            ) => <TableTitle>{item.label}</TableTitle>,
            renderItem: (item: D) => <div>{item.ContactName}</div>,
        },
        {
            key: TableColumn.Title,
            label: "Title",
            width: tableListColumn[TableColumn.Title],
            renderHeader: (
              item: { label: string | React.ReactNode },
            ) => <TableTitle>{item.label}</TableTitle>,
            renderItem: (item: D) => <div>{item.ContactTitle}</div>,
        },
        {
            key: TableColumn.City,
            label: "City",
            width: tableListColumn[TableColumn.City],
            renderHeader: (
              item: { label: string | React.ReactNode },
            ) => <TableTitle>{item.label}</TableTitle>,
            renderItem: (item: D) => <div>{item.City}</div>,
        },
        {
            key: TableColumn.Country,
            label: "Country",
            width: tableListColumn[TableColumn.Country],
            renderHeader: (
              item: { label: string | React.ReactNode },
            ) => <TableTitle>{item.label}</TableTitle>,
            renderItem: (item: D) => <div>{item.Country}</div>,
        },
    ],[tableListColumn])

    const handleRowClick = useCallback((row: D) => {
        navigate(row.SupplierID, {state: {from: location}})
      }, [location, navigate]);

    return {
        columns,
        handleRowClick,
    }
}

const TableTitle = styled.div`
`;

const Item = styled.div`
    color: #2563eb;
`;