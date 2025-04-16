import { sp } from "utils/numbers";
import styles from "./Main.module.css";

function Main({ posts, selectedCategory }) {
  const allPosts=posts?.data.posts;
  // console.log(allPosts);

  console.log(selectedCategory);

  const filteredPosts =
    selectedCategory === "All"
      ? allPosts
      : allPosts?.filter((post) => post.category === selectedCategory);

  console.log(filteredPosts);

  const baseURL = import.meta.env.VITE_BASE_URL;

  return (
    <div className={styles.container}>
      {filteredPosts.map((post) => (
        <div key={post._id} className={styles.card}>
          <div className={styles.info}>
            <p>{post.options?.title}</p>
            <div>
              <p>{sp(post.amount)} تومان</p>
              <span>{post.options?.city}</span>
            </div>
          </div>
          <img src={`${baseURL}${post.images[0]}`} />
        </div>
      ))}
    </div>
  );
}

export default Main;
