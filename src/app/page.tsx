import SideMenu from "./components/SideMenu/sideMenu";
import styles from "./page.module.css";
import S3Page from "./components/S3Page/s3Page";
import Route53Page from "./components/Route53Page/route53";

export default function Home() {
  return (
    <main>
      <div className={styles.layout}>
        <SideMenu />
        <Route53Page />
      </div>
    </main>
  );
}
