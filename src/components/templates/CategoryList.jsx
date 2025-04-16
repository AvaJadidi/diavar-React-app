import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCategory, deleteCategory } from "services/admin";

import Loader from "../modules/Loader";
import styles from "./CategoryList.module.css";


function CategoryList() {

  const queryClient = useQueryClient();
  
  const { data, isLoading} = useQuery(
    ["get-categories"],
    getCategory
  );
 

  const deleteCategoryHandler = async (id) => {
    console.log(id);
   
    try {
      await deleteCategory(id);
    } catch (error) {
      console.log(error);
    }
    
    queryClient.invalidateQueries(["get-categories"]);
  };

  return (
    <div className={styles.list}>
      {isLoading ? (
        <Loader />
      ) : (
        data?.data.map((i) => (
          <div key={i._id}>
            <img src={`${i.icon}.svg`} alt="" />
            <h5>{i.name}</h5>
            <p></p>
            <button onClick={() => deleteCategoryHandler(i._id)}>حذف</button>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryList;
