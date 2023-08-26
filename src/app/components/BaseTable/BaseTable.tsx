'use client';

import {Table, flexRender } from '@tanstack/react-table';
import { MouseEvent, ReactElement } from 'react';
import {BaseTableType} from "@/app/common-types/table";



const BaseTable: <T>(props: BaseTableType<T>) => ReactElement = ({ table }) => {

  const handleUserIdClick = (e: MouseEvent<HTMLElement>, row: any): void => {
    const cellValue = row
      ?.getVisibleCells()
      ?.find((cell: any) => cell.getValue('userId') === (e.target as HTMLElement).id);

    // do smth
  }

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <td key={header.id}>
                <p
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {!header.isPlaceholder && flexRender(header.column.columnDef.header, header.getContext())}
                  {{
                    asc: ' 🔼',
                    desc: ' 🔽',
                  }[header.column.getIsSorted() as string] ?? null}
                </p>
              </td>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => {
              return (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BaseTable;
