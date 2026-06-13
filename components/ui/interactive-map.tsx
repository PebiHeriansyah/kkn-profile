"use client";

import dynamic from "next/dynamic";
import React from "react";

// Dynamically import the map component to avoid SSR issues with Leaflet
const AdvancedMap = dynamic(
  () => import("./interactive-map-core").then((mod) => mod.AdvancedMap),
  {
    ssr: false,
    loading: () => (
      <div className="h-[500px] w-full animate-pulse bg-gray-200 rounded-lg flex items-center justify-center">
        <span className="text-gray-500 font-medium">Memuat Peta...</span>
      </div>
    ),
  }
);

export { AdvancedMap };
