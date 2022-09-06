import { Button, Form, Input } from "antd";
import { useState } from "react";
import { useAddSqueezeLinkMutation } from "../../redux/APIs/statisticsAPI";
import { handleValidateForm } from "./helpers";
import { useAppDispatch } from "../../redux/hooks";
import { setClose } from "../../redux/slicers/openModalSlicer";

const NewLinkForm: React.FC = () => {
  const [form] = Form.useForm();
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const [addSqueezeLink, status] = useAddSqueezeLinkMutation();

  const dispatch = useAppDispatch();

  return (
    <div>
      <Form
        name="new-link-form"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        form={form}
        onFinish={(e) => {
          addSqueezeLink(encodeURIComponent(form.getFieldValue("newLink")));
          dispatch(setClose());
        }}
        autoComplete="off"
      >
        <Form.Item
          label="New link"
          name="newLink"
          rules={[
            {
              type: "url",
              message: "The input is not valid url!",
            },
            { required: true, message: "Please input link!" },
          ]}
        >
          <Input
            onChange={async (e) => {
              await handleValidateForm(form, setIsDisabled);
            }}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 16, span: 8 }}>
          <Button
            type="primary"
            htmlType="submit"
            loading={status.isLoading}
            disabled={isDisabled}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NewLinkForm;
