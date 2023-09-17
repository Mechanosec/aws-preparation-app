import { ColumnDef } from "@tanstack/table-core";
import { ReactElement } from "react";
import { Route53TableColumn } from "@/app/common-types/route53";

export const route53TableColumns: ColumnDef<any>[] = [
  {
    id: Route53TableColumn.CHECKBOX,
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
    id: Route53TableColumn.HOSTED_ZONE_NAME,
    header: "Hosted zone name",
    enableSorting: true,
    accessorFn: (row) => row[Route53TableColumn.HOSTED_ZONE_NAME],
    cell: (name): ReactElement => <div>{name.getValue<string>()}</div>,
  },
  {
    id: Route53TableColumn.HOSTED_ZONE_ID,
    header: "Region",
    enableSorting: true,
    accessorFn: (row) => row[Route53TableColumn.HOSTED_ZONE_ID],
    cell: (region): ReactElement => <div>{region.getValue<string>()}</div>,
  },
];
