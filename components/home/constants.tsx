import { DataType, SelectOption } from "./interfaces";
import { ColumnsType } from "antd/es/table/interface";
import { Button, message } from "antd";
import { handleOpenSuccessNotificationHelper } from "../../common/helpers/handleOpenSuccessNotification.helper";
import { Order, Option } from "./enums";

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

const selectOptions: SelectOption[] = [
  {
    label: "Ascending order for short",
    value: `&order=${Order.ASC}_${Option.SHORT}`,
  },
  {
    label: "Ascending order for target",
    value: `&order=${Order.ASC}_${Option.TARGET}`,
  },
  {
    label: "Ascending order for counter",
    value: `&order=${Order.ASC}_${Option.COUNTER}`,
  },
  {
    label: "Descending order for short",
    value: `&order=${Order.DESC}_${Option.SHORT}`,
  },
  {
    label: "Descending order for target",
    value: `&order=${Order.DESC}_${Option.TARGET}`,
  },
  {
    label: "Descending order for counter",
    value: `&order=${Order.DESC}_${Option.COUNTER}`,
  },
];

export { columns, selectOptions };
