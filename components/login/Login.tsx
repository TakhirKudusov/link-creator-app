import { Tabs } from "antd";
import Form from "./UserForm";
import UserForm from "./UserForm";

const { TabPane } = Tabs;

const Login: React.FC = () => {
  return (
    <div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Sign in" key="1">
          <UserForm isSignInForm={true} />
        </TabPane>
        <TabPane tab="Sign up" key="2">
          <UserForm isSignInForm={false} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Login;
