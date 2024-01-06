import Image from "next/legacy/image";

interface NavButton {
  name: string;
  linkParams: string;
  icon: React.ReactNode;
}

interface SidebarSection {
  id: number;
  section_name: string;
  buttons: NavButton[];
}

const sidebarNavButtons: SidebarSection[] = [
  // ---Main Buttons
  {
    id: 1,
    section_name: "Main",
    buttons: [
      {
        name: "Overview",
        linkParams: "#theoverview",
        icon: (
          <Image
            src="/assets/svgs/meter-icon.svg"
            alt="all-order-svg"
            height={20}
            width={20}
          />
        ),
      },
    ],
  },
  // ---Payment Buttons
  {
    id: 2,
    section_name: "Payments",
    buttons: [
      {
        linkParams: "#all-payments",
        icon: (
          <Image
            src="/assets/svgs/all-payments-icon.svg"
            alt="all-order-svg"
            height={20}
            width={20}
          />
        ),
        name: "All Payments",
      },
      {
        linkParams: "#reconcilled-payments",
        icon: (
          <Image
            src="/assets/svgs/reconcilled-payments-icon.svg"
            alt="all-order-svg"
            height={20}
            width={20}
          />
        ),
        name: "Reconciled Payments",
      },
      {
        linkParams: "#unreconcilled-payment",
        icon: (
          <Image
            src="/assets/svgs/unreconcilled-payments-icon.svg"
            alt="all-order-svg"
            height={20}
            width={20}
          />
        ),
        name: "Un-Reconciled Payments",
      },
      {
        linkParams: "#manual-settlement",
        icon: (
          <Image
            src="/assets/svgs/manual-settlement-icon.svg"
            alt="all-order-svg"
            height={20}
            width={20}
          />
        ),
        name: "Manual Settlement",
      },
    ],
  },
  // ---Order Buttons
  {
    id: 3,
    section_name: "Orders",
    buttons: [
      {
        linkParams: "#all-orders",
        icon: (
          <Image
            src="/assets/svgs/all-orders-icon.svg"
            alt="all-order-svg"
            height={20}
            width={20}
          />
        ),
        name: "All Orders",
      },
      {
        linkParams: "#pending-orders",
        icon: (
          <Image
            src="/assets/svgs/pending-orders-icon.svg"
            alt="pending-orders-svg"
            height={20}
            width={20}
          />
        ),
        name: "Pending Orders",
      },
      {
        linkParams: "#reconciled-orders",
        icon: (
          <Image
            src="/assets/svgs/reconcilled-order-icon.svg"
            alt="all-order-svg"
            height={20}
            width={20}
          />
        ),
        name: "Reconciled Orders",
      },
    ],
  },
  // ---Other Buttons
  {
    id: 4,
    section_name: "",
    buttons: [
      {
        linkParams: "#merchant-profile",
        icon: (
          <Image
            src="/assets/svgs/merchant-profile-icon.svg"
            alt="all-order-svg"
            height={20}
            width={20}
          />
        ),
        name: "Merchant Profile",
      },
    ],
  },
];

export default sidebarNavButtons;
