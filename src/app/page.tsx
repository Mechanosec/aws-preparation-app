import Project from "./components/Project/project";
import SideMenu from "./components/SideMenu/sideMenu";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.layout}>
        <SideMenu />
        <Project />
      </div>
    </main>
  );
}
