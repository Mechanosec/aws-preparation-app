import { FC } from "react";
import styles from "./header.module.css";

const Header: FC = () => {
  return (
    <>
      <div className={styles.Header}>
        <h1>Projects</h1>
        <div>
          <select>
            <option>Edit</option>
            <option>Clone</option>
            <option>Delete</option>
          </select>
          <button>Create</button>
        </div>
      </div>
    </>
  );
};

export default Header;
