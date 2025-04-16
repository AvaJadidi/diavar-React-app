
import style from "./Sidebar.module.css";

function Sidebar({ categories,onSelectedCategory}) {

  console.log(categories);

const ShowAllData=()=>{
 onSelectedCategory("All")
}


  return (
    <div className={style.category}>
      <h4>دسته بندی ها</h4>
      <ul>
        <li onClick={()=>ShowAllData()}>
          <img src="./home.svg" alt="" />
          <p>همه </p>
        </li>
        {categories?.data?.map((category) => (
          <li key={category._id} onClick={()=>onSelectedCategory(category._id)}>
            <img src={`${category.icon}.svg`} />
            <p>{category.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
