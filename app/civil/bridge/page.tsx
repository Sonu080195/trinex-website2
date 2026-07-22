import type { Metadata } from "next";
import BridgeContent from "./BridgeContent";

export const metadata: Metadata = {
  title: "Bridge Construction Recruitment", // renders as "Bridge Construction Recruitment - RUDRON Global Talent Solutions"
  description:
    "RUDRON delivers specialized recruitment solutions for bridge and heavy civil infrastructure projects—connecting contractors with highly experienced construction professionals across complex structural developments.",
  alternates: {
    canonical: "https://www.rudrongts.com/civil/bridge",
  },
};

export default function BridgePage() {
  return <BridgeContent />;
}