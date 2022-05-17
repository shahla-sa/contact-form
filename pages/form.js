import PostForm from "../components/form/PostForm";
import PostList from "../components/post/PostList";
import styles from "../styles/Home.module.scss";

const FormPage = () => {
  return (
    <div className={styles.grid}>
      <PostForm />
      <PostList />
    </div>
  );
};

export default FormPage;
