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
import { useGetS3Objects } from "../../hooks/useGetS3/useGetS3";
import { s3ObjectsTableColumns } from "./data";

const S3ObjectsPage: FC = () => {
  const [rowSelection, setRowSelection] = useState({});
  const [sorting, setSorting] = useState<SortingState>([]);

  const { s3ObjectsData } = useGetS3Objects("capsule-files-dev");
  console.log(s3ObjectsData);

  const columns = useMemo(() => s3ObjectsTableColumns, []);

  const table = useReactTable({
    data: s3ObjectsData,
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

export default S3ObjectsPage;
