import {ChangeEvent, ReactElement} from 'react';


import {PAGINATION_COUNT_LIST} from "@/app/utils/constants";
import {BaseTableType} from "@/app/common-types/table";

class ITable<T> {
}

const TablePagination: <T>(props: BaseTableType<T>) => ReactElement = ({ table }) => {
  return (
    <div>
      <div>
        <div>
          <p>
            Rows per page:
          </p>
          <select
            value={table.getState()?.pagination?.pageSize}
            onChange={(e: ChangeEvent<HTMLSelectElement>): void => table.setPageSize(Number(e.target?.value))}
          >
            {PAGINATION_COUNT_LIST.map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <p>
          {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </p>
      </div>
      <div>
        <div>
          <div>
            <button type="button" onClick={(): void => table.previousPage()} disabled={!table.getCanPreviousPage()}>
              {'>'}
            </button>
          </div>
          <div>
            <button type="button" onClick={(): void => table.nextPage()} disabled={!table.getCanNextPage()}>
              {'<'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TablePagination;
