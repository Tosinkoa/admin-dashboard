import { FC, useEffect, useState } from "react";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";
import { Column, useGlobalFilter, usePagination, useTable } from "react-table";
import { TableFilter, TableDropdownFilter } from "./TableFilter";
import PaymentData from "@/components/PagesComponent/Home/Payment/PaymentData.json";
import { PaymentTableColumns } from "../PagesComponent/Home/Payment/PaymentTableColumns";

const TableComponent: FC = () => {
  const tableInstance = useTable(
    { columns: PaymentTableColumns, data: PaymentData },
    useGlobalFilter,
    usePagination
  );
  const [showOptionAmount, setShowOptionAmount] = useState([]);
  const [disableShowOptionButton, setDisableShowOptionButton] = useState(false);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    gotoPage,
    setPageSize,
    pageCount,
    pageOptions,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <div>
      <div className="text-sm md:justify-between md:text-base mb-5 flex flex-col md:flex-row space-y-4 md:space-y-0">
        <div className="flex flex-col md:flex-row md:space-x-16">
          <div className="flex items-center">
            <span>Showing</span>
            <select
              onChange={(e) => setPageSize(Number(e.target.value))}
              className="bg-inherit border-none focus:outline-none focus:ring-0 focus:border-none text-blue-700"
            >
              {[5, 10, 20].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
            <span className="whitespace-nowrap">out of 20</span>
          </div>
          <TableFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </div>
        <div>
          <TableDropdownFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </div>
      </div>

      <div id="player-table" className="scroll-mt-24">
        <div className="h-fit relative full mx-auto justify-center rounded-sm overflow-x-scroll">
          <table className="table" {...getTableProps()}>
            <thead className="table_head">
              {headerGroups.map((headerGroup) => (
                <tr
                  className="table_row"
                  key={PaymentData?.id}
                  {...headerGroup.getHeaderGroupProps()}
                >
                  {headerGroup.headers.map((column) => (
                    <th
                      scope="col"
                      key={PaymentData?.id}
                      className="table_head_row"
                      {...column.getHeaderProps()}
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            {PaymentData && (
              <tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr
                      key={PaymentData?.id}
                      className="table_head_row "
                      {...row.getRowProps()}
                    >
                      {row.cells.map((cell) => (
                        <td
                          className="table_data min-w-min w-fit mx-auto "
                          key={PaymentData?.id}
                          {...cell.getCellProps()}
                        >
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            )}
          </table>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between my-3 gap-4">
        <p>
          Showing {pageIndex * pageSize + 1} to{" "}
          {Math.min((pageIndex + 1) * pageSize, PaymentData?.length)} of {PaymentData?.length}{" "}
          entries
        </p>
        <div>
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="border border-neutral-300 rounded-sm py-1 px-3 cursor-pointer"
          >
            Previous
          </button>

          {/* Pagination buttons */}
          {pageOptions.map((page, index) => (
            <button
              key={index}
              onClick={() => gotoPage(index)}
              className={`border border-neutral-300 rounded-sm py-1 px-3 ${
                pageIndex === index ? "bg-blue-500 text-white" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="border border-neutral-300 rounded-sm py-1 px-3 cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
