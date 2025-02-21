import React, { useState } from "react";
import { HeaderGeneralAdmin } from "../components/HeaderGeneralAdmin";
import { Footer } from "../components/Footer";

function GestionRubros() {

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <HeaderGeneralAdmin />
      <Footer />
    </div>
  );
}

export default GestionRubros;