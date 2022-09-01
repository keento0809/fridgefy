import React, { useContext } from "react";
import { DataContext } from "../helper/DataContext";

const useDataContext = () => {
  const context = useContext(DataContext);

  if (!context) {
    alert("Invalid context");
    return;
  }

  return context;
};

export default useDataContext;
