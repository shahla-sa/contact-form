import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className={styles.topMenu}>
      <ul>
        <li>
          <Link href="/">
            <a className={router.pathname == "/" ? styles.active : ""}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className={router.pathname == "/about" ? styles.active : ""}>
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href="/" contact>
            <a className={router.pathname == "/contact" ? styles.active : ""}>
              Contact
            </a>
          </Link>
        </li>
        <li>
          <Link href="/form">
            <a className={router.pathname == "/form" ? styles.active : ""}>
              Form
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
