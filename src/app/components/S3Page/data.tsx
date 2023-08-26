import {S3TableColumn} from "@/app/common-types/s3";
import {ColumnDef} from "@tanstack/table-core";
import {ReactElement} from "react";

export const s3TableColumns: ColumnDef<any>[] = [
  {
    id: S3TableColumn.CHECKBOX,
    enableSorting: false,
    cell: ({ row }): ReactElement => (
      <input type="checkbox"
         checked={row.getIsSelected()}
         disabled={!row.getCanSelect()}
         onChange={row.getToggleSelectedHandler()}
      />
    ),
  },
  {
    id: S3TableColumn.NAME,
    header: "Name",
    enableSorting: true,
    accessorFn: (row) => row[S3TableColumn.NAME],
    cell: (name): ReactElement => (
      <div>{name.getValue<string>()}</div>
    )
  },
  {
    id: S3TableColumn.REGION,
    header: "Region",
    enableSorting: true,
    accessorFn: (row) => row[S3TableColumn.REGION],
    cell: (region): ReactElement => (
      <div>{region.getValue<string>()}</div>
    )
  },
  {
    id: S3TableColumn.ACCESS,
    header: "Access",
    enableSorting: true,
    accessorFn: (row) => row[S3TableColumn.ACCESS],
    cell: (access): ReactElement => (
      <div>{access.getValue<string>()}</div>
    )
  },
  {
    id: S3TableColumn.CREATION_DATE,
    header: "Creation Date",
    enableSorting: true,
    accessorFn: (row) => row[S3TableColumn.CREATION_DATE],
    cell: (creationDate): ReactElement => (
      <div>{creationDate.getValue<string>()}</div>
    )
  }
];
