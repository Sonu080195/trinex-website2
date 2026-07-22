import type { Metadata } from "next";
import WarehouseContent from "./WarehouseContent";

export const metadata: Metadata = {
  title: "Warehouse Construction Recruitment", // renders as "Warehouse Construction Recruitment - RUDRON Global Talent Solutions"
  description:
    "RUDRON delivers specialized recruitment solutions for warehouse and logistics construction projects—connecting contractors and developers with experienced professionals across large-scale industrial developments.",
  alternates: {
    canonical: "https://www.rudrongts.com/industrial/warehouse",
  },
};

export default function WarehousePage() {
  return <WarehouseContent />;
}