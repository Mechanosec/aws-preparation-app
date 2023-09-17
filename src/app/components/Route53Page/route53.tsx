"use client";
import { FC, useMemo, useState } from "react";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import BaseTable from "@/app/components/BaseTable/BaseTable";
import TablePagination from "@/app/components/BasePagination/BasePagination";
import { useGetRoute53 } from "../../hooks/useGetRoute53/useGetRoute53";
import { route53TableColumns } from "./data";

const Route53Page: FC = () => {
  const [rowSelection, setRowSelection] = useState({});
  const [sorting, setSorting] = useState<SortingState>([]);

  const { route53Data } = useGetRoute53();

  const columns = useMemo(() => route53TableColumns, []);

  const table = useReactTable({
    data: route53Data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    state: {
      sorting,
      rowSelection,
    },
  });

  return (
    <div>
      <BaseTable table={table} />
      <TablePagination table={table} />
    </div>
  );
};

export default Route53Page;
