import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RUDRON Global Talent Solutions",
    short_name: "RUDRON",
    description:
      "Specialist Construction, Engineering, Architecture and MEP recruitment partner serving organizations across North America and global markets.",

    start_url: "/",
    scope: "/",
    display: "standalone",

    background_color: "#080808",
    theme_color: "#080808",

    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}