import { DataType } from "./interfaces";
import { ColumnsType } from "antd/es/table/interface";
import { Button, message } from "antd";
import { handleOpenSuccessNotificationHelper } from "../../common/helpers/handleOpenSuccessNotification.helper";

const columns: ColumnsType<DataType> = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    ellipsis: true,
    width: "7.5%",
  },
  {
    title: "Short",
    dataIndex: "short",
    key: "short",
    ellipsis: true,
    width: "40%",
    render: (_, record) => {
      return (
        <Button
          type="link"
          onClick={() => {
            navigator.clipboard.writeText(record.short);
            message.success("Link copied to clipboard!");
          }}
        >
          {record.short}
        </Button>
      );
    },
  },
  {
    title: "Target",
    dataIndex: "target",
    key: "target",
    width: "42.5%",
  },
  {
    title: "Counter",
    dataIndex: "counter",
    key: "counter",
    ellipsis: true,
    width: "10%%",
  },
];

export { columns };
