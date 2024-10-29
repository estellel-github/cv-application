import { useContext } from "react";
import { CVContext } from "./CVContext";

const useCV = () => useContext(CVContext);

export { useCV };
