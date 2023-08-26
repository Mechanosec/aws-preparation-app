"use client";
import { FC, useMemo, useState } from "react";
import { useGetS3 } from "@/app/hooks/useGetS3/useGetS3";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import BaseTable from "@/app/components/BaseTable/BaseTable";
import { s3TableColumns } from "@/app/components/S3Page/data";
import TablePagination from "@/app/components/BasePagination/BasePagination";

const someS3data = [
  {
    name: "asd",
    region: "asd",
    access: "asdasd",
    creationDate: "",
  },
  {
    name: "asd",
    region: "asd",
    access: "asdasd",
    creationDate: "",
  },
  {
    name: "asd",
    region: "asd2",
    access: "asdasd",
    creationDate: "",
  },
  {
    name: "asd",
    region: "asd",
    access: "asdasd",
    creationDate: "",
  },
];

const S3Page: FC = () => {
  const [rowSelection, setRowSelection] = useState({});
  const [sorting, setSorting] = useState<SortingState>([]);

  const { s3Data } = useGetS3();

  const columns = useMemo(() => s3TableColumns, []);

  const table = useReactTable({
    data: s3Data.length ? s3Data : someS3data,
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

export default S3Page;
