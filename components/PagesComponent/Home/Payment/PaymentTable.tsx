import PaymentData from "@/components/PagesComponent/Home/Payment/PaymentData.json";
import {
  PaymentTableDropdownFilter,
  PaymentTableFilter,
} from "@/components/PagesComponent/Home/Payment/PaymentTableFilter";
import { FC } from "react";
import { useGlobalFilter, usePagination, useTable } from "react-table";
import { PaymentTableColumns } from "./PaymentTableColumns";

const PaymentTable: FC = () => {
  const tableInstance = useTable(
    { columns: PaymentTableColumns, data: PaymentData },
    useGlobalFilter,
    usePagination
  );

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
    pageOptions,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <div>
      <p className="payment_table_title">Payments</p>
      <div className="payment_table_header_filter_bg">
        <div className="payment_table_left_items">
          <div className="payment_table_amount_show">
            <span>Showing</span>
            <select
              onChange={(e) => setPageSize(Number(e.target.value))}
              className="payment_table_show_total"
            >
              {[5, 10, 20].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
            <span className="payment_table_remain_show_detail">out of 20</span>
          </div>
          <PaymentTableFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </div>
        <div>
          <PaymentTableDropdownFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </div>
      </div>

      <div className="payment_table_main_bg">
        <table className="table" {...getTableProps()}>
          <thead className="payment_table_head">
            {headerGroups.map((headerGroup, index) => {
              const { key, ...restHeaderProps } = headerGroup.getHeaderGroupProps();

              return (
                <tr className="payment_table_row" key={key} {...restHeaderProps}>
                  {headerGroup.headers.map((column) => {
                    const { key, ...restColumnProps } = column.getHeaderProps();
                    return (
                      <th
                        scope="col"
                        key={key}
                        className="payment_table_head_row"
                        {...restColumnProps}
                      >
                        {column.render("Header")}
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>

          {PaymentData && (
            <tbody {...getTableBodyProps()}>
              {page.map((row, i) => {
                prepareRow(row);
                const { key, ...restCellProps } = row.getRowProps();
                return (
                  <tr key={key} className="payment_table_body_row" {...restCellProps}>
                    {row.cells.map((cell) => {
                      const { key, ...restCellProps } = cell.getCellProps();
                      return (
                        <td className="payment_table_data" key={key} {...restCellProps}>
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      </div>

      <div className="payment_table_bottom_buttons_bg">
        <p>
          Showing {pageIndex * pageSize + 1} to
          {Math.min((pageIndex + 1) * pageSize, PaymentData?.length)} of {PaymentData?.length}
          entries
        </p>
        <div>
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="payment_table_previous_button"
          >
            Previous
          </button>

          {pageOptions.map((page, index) => (
            <button
              key={index}
              onClick={() => gotoPage(index)}
              className={`payment_table_page_index ${
                pageIndex === index ? "payment_table_page_index_colors" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="payment_table_next_button"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentTable;
