import { Button } from "antd";
import styles from "./index.module.scss";
import { useAppDispatch } from "../../redux/hooks";
import { setOpen } from "../../redux/slicers/openModalSlicer";

const HomeHeader: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles["header-container"]}>
      <span className={styles["header-container__title"]}>
        <h1>Statistics</h1>
      </span>
      <span className={styles["header-container__button"]}>
        <Button onClick={() => dispatch(setOpen())} type="primary">
          New short link
        </Button>
      </span>
    </div>
  );
};

export default HomeHeader;
