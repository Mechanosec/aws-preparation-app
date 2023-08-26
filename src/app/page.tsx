import SideMenu from "./components/SideMenu/sideMenu";
import styles from "./page.module.css";
import S3Page from "./components/S3Page/s3Page";

export default function Home() {
  return (
    <main>
      <div className={styles.layout}>
        <SideMenu />
        <S3Page />
      </div>
    </main>
  );
}
