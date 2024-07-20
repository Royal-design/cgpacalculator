import { useContext } from "react";
import { DataFormContext } from "./FormContext";
export const useFormContext = () => {
  return useContext(DataFormContext);
};
