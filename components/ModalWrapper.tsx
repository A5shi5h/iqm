"use client";

import React from "react";

export default function ModalWrapper({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/60 z-[1000]" onClick={onClose} />

      {/* Modal Content */}
      <div className="fixed z-[1001] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {children}
      </div>
    </>
  );
}
