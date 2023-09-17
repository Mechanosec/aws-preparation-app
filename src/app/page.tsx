import SideMenu from "./components/SideMenu/sideMenu";
import styles from "./page.module.css";
import S3ObjectsPage from "./components/S3ObjectsPage/s3ObjectsPage";

export default function Home() {
  return (
    <main>
      <div className={styles.layout}>
        <SideMenu />
        <S3ObjectsPage />
      </div>
    </main>
  );
}
