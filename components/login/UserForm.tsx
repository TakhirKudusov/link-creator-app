import { Button, Checkbox, Form, Input } from "antd";
import { handleFormSubmit } from "./helpers";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  useLoginMutation,
  useRegisterMutation,
} from "../../redux/APIs/statisticsAPI";
import { useRouter } from "next/router";
import { Page, paths } from "../../routes/constants";

interface Props {
  isSignInForm: boolean;
  setActiveTabPane?: Dispatch<SetStateAction<string>>;
}

const UserForm: React.FC<Props> = ({ isSignInForm, setActiveTabPane }) => {
  const [form] = Form.useForm();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [register, registerStatus] = useRegisterMutation();
  const [login, loginStatus] = useLoginMutation();

  const router = useRouter();

  useEffect(() => {
    if (!isSignInForm && registerStatus.isSuccess && !!setActiveTabPane) {
      setActiveTabPane("1");
    }
  }, [registerStatus.isSuccess]);

  useEffect(() => {
    if (loginStatus.isSuccess) {
      router.push(paths[Page.HOME]);
    }
  }, [loginStatus.isSuccess]);

  return (
    <div>
      <Form
        name="user-form"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        form={form}
        onFinish={handleFormSubmit(register, login, isSignInForm)}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input onChange={(e) => setUsername(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>

        {isSignInForm && (
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        )}

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            disabled={!username || !password}
            loading={registerStatus.isLoading || loginStatus.isLoading}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UserForm;
