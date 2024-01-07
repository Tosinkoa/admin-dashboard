import React, { FC } from "react";
import { BiSearch } from "react-icons/bi";

interface TableFilterProps {
  filter: string;
  setFilter: (value: string) => void;
}

export const TableFilter: FC<TableFilterProps> = ({ filter, setFilter }) => {
  return (
    <div className="flex w-fit items-center relative border-b border-neutral-400 h-9">
      <BiSearch className="absolute left-0 text-2xl" />
      <input
        value={filter || ""}
        className="border-none bg-inherit focus:ring-0 focus:outline-none pl-8"
        placeholder="Search Payments..."
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export const TableDropdownFilter: FC<TableFilterProps> = ({ filter, setFilter }) => {
  return (
    <div className="flex w-fit items-center relative rounded-sm h-9">
      <select
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        name="dropdown_filter"
        className="focus:ring-0 focus:border-neutral-300 border-neutral-300"
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
