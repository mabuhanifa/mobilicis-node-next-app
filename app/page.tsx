"use client";
import { useState } from "react";
import Header from "./components/layout/Header";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  const handleOpenModal = (pkg: Package | null) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };
  return (
    <>
      <Header onGetQuoteClick={() => handleOpenModal(null)} />
    </>
  );
}
