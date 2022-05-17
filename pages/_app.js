import PostProvider from "../store/post/PostProvider";

import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/globals.scss";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <PostProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PostProvider>
  );
}

export default MyApp;
