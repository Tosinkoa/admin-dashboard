import Image from "next/legacy/image";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

/**@todo dont forget to remove any type */

export const PaymentTableColumns = [
  {
    id: "item_type",
    Header: "Item Type",
    accessor: (d: any) => (
      <div className="flex items-center space-x-2">
        <div className="relative h-[4rem] w-[4rem] ">
          <Image
            src={d.user_profile}
            alt="user"
            className="rounded-full"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <p className="inline-flex mt-4">{d.product_name}</p>
      </div>
    ),
  },
  { Header: "Price", accessor: "price" },
  { Header: "Transaction No", accessor: "transaction_number" },
  { Header: "Time", accessor: "time" },

  {
    Header: "",
    accessor: "status",
    Cell: ({ row }) => (
      <div>
        {row.values.status === "Pending" && (
          <div className="status_bg">
            <div className="text-yellow-400 flex border p-3 rounded-full space-x-2 px-4 animate-pulse">
              <GoDotFill className="text-lg" />
              <p>Pending</p>
            </div>
          </div>
        )}
        {row.values.status === "Reconcilled" && (
          <div className="status_bg">
            <div className="text-green-500 flex border p-3 rounded-full space-x-2 px-4">
              <GoDotFill className="text-lg " />
              <p>Reconcilled</p>
            </div>
          </div>
        )}
        {row.values.status === "Un-reconcilled" && (
          <div className="status_bg">
            <div className="text-gray-300 flex border p-3 rounded-full space-x-2 px-4 whitespace-nowrap">
              <GoDotFill className="text-lg " />
              <p>Un-Reconcilled</p>
            </div>
          </div>
        )}
      </div>
    ),
  },
  {
    id: "view",
    Header: " ",
    accessor: (d: any) => (
      <div className="flex text-2xl mx-3">
        <IoIosArrowDown className="text-neutral-400 text-2xl" />
      </div>
    ),
  },
];
