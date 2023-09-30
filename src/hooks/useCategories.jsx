import { useContext } from "react";
import { CategoriesContext } from "../Context/CategoriesProvider";

const useCategories = () => {
  return useContext(CategoriesContext)
}

export default useCategories
