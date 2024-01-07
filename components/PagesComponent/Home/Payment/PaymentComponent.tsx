import TableComponent from "@/components/Table/TableComponent";

const PaymentComponent: React.FC = () => {
  return (
    <div className="flex flex-col mt-10 gap-y-5">
      <p className="text-2xl">Payments</p>
      <TableComponent />
    </div>
  );
};

export default PaymentComponent;
