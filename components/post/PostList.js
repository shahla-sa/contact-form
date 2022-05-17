import { useContext } from "react";
import PostContext from "../../store/post/PostContext";
import PostItem from "./PostItem";
import { Spinner } from "react-bootstrap";
import styles from "./PostList.module.scss";

const PostList = () => {
  const { posts, loading } = useContext(PostContext);
  return (
    <div className={styles.wrapper}>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        posts.length > 0 && (
          <>
            <h4 className={styles.title}>Posts List</h4>
            {posts?.map((post) => (
              <div className={styles.item} key={post.id}>
                <PostItem post={post} />
              </div>
            ))}
          </>
        )
      )}
    </div>
  );
};

export default PostList;
