import { useEffect } from "react";
import Login from "../../components/login/Login";
import styles from "./index.module.scss";

const LoginPage: React.FC = () => {
  useEffect(() => {
    document.title = "Link App | Login page";
  }, []);

  return (
    <div className={styles["login-container"]}>
      <Login />
    </div>
  );
};

export default LoginPage;
