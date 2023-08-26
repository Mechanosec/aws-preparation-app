'use client';

import {Table, flexRender } from '@tanstack/react-table';
import { useRouter } from 'next/router';
import { Fragment, MouseEvent, ReactElement } from 'react';

export type BaseTableType<T> = {
  table: Table<T>;
}

const BaseTable: <T>(props: BaseTableType<T>) => ReactElement = ({ table }) => {
  const router = useRouter();

  const handleUserIdClick = (e: MouseEvent<HTMLElement>, row: any): void => {
    const cellValue = row
      ?.getVisibleCells()
      ?.find((cell: any) => cell.getValue('userId') === (e.target as HTMLElement).id);
    // do smth
  }

  return (
    <table>
      <th>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <td key={header.id}>
                <p
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
      </th>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => {
              return (
                <td key={cell.id}>
                  flexRender(cell.column.columnDef.cell, cell.getContext())
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
