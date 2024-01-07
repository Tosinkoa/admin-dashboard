import React, { FC } from "react";
import { BiSearch } from "react-icons/bi";

interface TableFilterProps {
  filter: string;
  setFilter: (value: string) => void;
}

export const PaymentTableFilter: FC<TableFilterProps> = ({ filter, setFilter }) => {
  return (
    <div className="payment_table_filter_bg_border payment_table_filter_bg">
      <BiSearch className="payment_table_filter_search_icon" />
      <input
        value={filter || ""}
        className="payment_table_filter_input"
        placeholder="Search Payments..."
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export const PaymentTableDropdownFilter: FC<TableFilterProps> = ({ filter, setFilter }) => {
  return (
    <div className="payment_table_filter_bg">
      <select
        aria-label="payemnt_filter"
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        name="dropdown_filter"
        className="payment_table_filter_dropdown"
      >
        <option value="">All</option>
        <option value="Reconcilled">Reconcilled</option>
        <option value="Un-reconcilled">Un-reconcilled</option>
        <option value="Settled">Settled</option>
        <option value="Unsettled">Unsettled</option>
      </select>
    </div>
  );
};
