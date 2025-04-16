import { useQuery } from "@tanstack/react-query";

import Main from "components/templates/Main";
import Sidebar from "components/templates/Sidebar";
import { getAllPosts } from "services/user";
import Loader from "components/modules/Loader";
import { getCategory } from "services/admin";
import { useState } from "react";

const style = { display: "flex" };
function HomePage() {
  
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { data: posts, isLoading: postLoading } = useQuery(
    ["post-list"],
    getAllPosts
  );
  const { data: categories, isLoading: categoryLoading } = useQuery(
    ["get-categories"],
    getCategory
  );

  console.log({ postLoading, posts });
  console.log({ categoryLoading, categories });

  return (
    <>
      {postLoading || categoryLoading ? (
        <Loader />
      ) : (
        <div style={style}>
          <Sidebar
            categories={categories}
            onSelectedCategory={(category) => setSelectedCategory(category)}
          />
          <Main posts={posts} selectedCategory={selectedCategory} />
        </div>
      )}
    </>
  );
}

export default HomePage;
