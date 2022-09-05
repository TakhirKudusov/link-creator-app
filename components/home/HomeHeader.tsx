import { Button } from "antd";
import styles from "./index.module.scss";

const HomeHeader: React.FC = () => {
  return (
    <div className={styles["header-container"]}>
      <span className={styles["header-container__title"]}>
        <h1>Statistics</h1>
      </span>
      <span className={styles["header-container__button"]}>
        <Button type="primary">New short link</Button>
      </span>
    </div>
  );
};

export default HomeHeader;
