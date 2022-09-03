import { Tabs } from "antd";
import Form from "./UserForm";
import UserForm from "./UserForm";
import { useState } from "react";

const { TabPane } = Tabs;

const Login: React.FC = () => {
  const [tabPaneKey, setTabPaneKey] = useState<string>("1");

  return (
    <div>
      <Tabs
        activeKey={tabPaneKey}
        defaultActiveKey="1"
        onChange={(e) => setTabPaneKey(e)}
      >
        <TabPane tab="Sign in" key="1">
          <UserForm isSignInForm={true} />
        </TabPane>
        <TabPane tab="Sign up" key="2">
          <UserForm isSignInForm={false} setActiveTabPane={setTabPaneKey} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Login;
