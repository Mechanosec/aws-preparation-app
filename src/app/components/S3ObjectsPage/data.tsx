import { S3ObjectsTableColumn } from "@/app/common-types/s3";
import { ColumnDef } from "@tanstack/table-core";
import { ReactElement } from "react";

export const s3ObjectsTableColumns: ColumnDef<any>[] = [
  {
    id: S3ObjectsTableColumn.CHECKBOX,
    enableSorting: false,
    cell: ({ row }): ReactElement => (
      <input
        type="checkbox"
        checked={row.getIsSelected()}
        disabled={!row.getCanSelect()}
        onChange={row.getToggleSelectedHandler()}
      />
    ),
  },
  {
    id: S3ObjectsTableColumn.FILE_NAME,
    header: "File name",
    enableSorting: true,
    accessorFn: (row) => row[S3ObjectsTableColumn.FILE_NAME],
    cell: (name): ReactElement => <div>{name.getValue<string>()}</div>,
  },
  {
    id: S3ObjectsTableColumn.SIZE,
    header: "Size",
    enableSorting: true,
    accessorFn: (row) => row[S3ObjectsTableColumn.SIZE],
    cell: (region): ReactElement => <div>{region.getValue<string>()}</div>,
  },
  {
    id: S3ObjectsTableColumn.LAST_MODIFIED,
    header: "Last modified",
    enableSorting: true,
    accessorFn: (row) => row[S3ObjectsTableColumn.LAST_MODIFIED],
    cell: (access): ReactElement => <div>{access.getValue<string>()}</div>,
  },
];
