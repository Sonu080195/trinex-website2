import type { Metadata } from "next";
import TunnelContent from "./TunnelContent";

export const metadata: Metadata = {
  title: "Tunnel Construction Recruitment", // renders as "Tunnel Construction Recruitment - RUDRON Global Talent Solutions"
  description:
    "RUDRON delivers specialized recruitment solutions for tunnel and underground infrastructure projects—connecting contractors with highly experienced construction professionals across complex transportation developments.",
  alternates: {
    canonical: "https://www.rudrongts.com/civil/tunnel",
  },
};

export default function TunnelPage() {
  return <TunnelContent />;
}