import React from "react";
import Link from "next/link";
import styles from "./SideMenu.module.css";

const SideMenu: React.FC = () => {
  return (
    <nav className={styles.sideMenu}>
      <ul>
        <li>
          <Link href="/">
            <span>Projects</span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <span>S3</span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <span>Route 53</span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <span>Cloud Front</span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <span>Certificate Manager</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideMenu;
