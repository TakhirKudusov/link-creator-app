import { Button, Checkbox, Form, Input } from "antd";
import { handleFormSubmit } from "./helpers";
import { useEffect, useState } from "react";
import { useRegisterMutation } from "../../redux/APIs/statisticsAPI";

interface Props {
  isSignInForm: boolean;
}

const UserForm: React.FC<Props> = ({ isSignInForm }) => {
  const [form] = Form.useForm();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [register, status] = useRegisterMutation();

  return (
    <div>
      <Form
        name="user-form"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        form={form}
        onFinish={handleFormSubmit(register, status, isSignInForm)}
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
            loading={status.isLoading}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UserForm;
