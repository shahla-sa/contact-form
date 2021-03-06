import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Technical Task</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
        Technical Task with <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>1. Git (~ 5min) &rarr;</h2>
          <p>
            Clone the project then create a branch from "main" and name it based
            on your "full-name"
          </p>
        </div>

        <div className={styles.card}>
          <h2>2. Run the project (~ 5min) &rarr;</h2>
          <p>Fix an error and run the project</p>
        </div>

        <a className={styles.card}>
          <h2>3. SCSS (~ 5min) &rarr;</h2>
          <p>Rewrite menu styles with nested sass </p>
          <p>Use variables for colors </p>
        </a>

        <a className={styles.card}>
          <h2>4. Contact form (~ 30min)</h2>
          <p>
            4.1 - create /form page and use the top menu in it (use next layout)
            <br />
            4.2 - create a form component with these fields: name, mobile,
            description(use Material Ui Or React Bootstrap) <br />
            4.3 - submit the form and post dsata to{" "}
            <span className={styles.link}>
              https://jsonplaceholder.typicode.com/posts
            </span>
            <br />
            4.4 - show result of sending the form
            <br />
            4.5 - save form result and don't let the user send it again (Use
            context or redux to save result)
            <br />
            4.6 - Fix Responsive problems of main page
            <br />
          </p>
        </a>
      </div>
    </>
  );
}
