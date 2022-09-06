import { Skeleton, Table } from "antd";
import { DataType } from "./interfaces";
import { columns } from "./constants";
import { useEffect, useState } from "react";
import { useGetStatisticsQuery } from "../../redux/APIs/statisticsAPI";
import { handleChangeTablePage } from "./helpers";
import { useDispatch } from "react-redux";
import NewLinkDrawer from "./NewLinkDrawer";

const LinksTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rows, setRows] = useState<DataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();
  const { data = [], isLoading, isSuccess } = useGetStatisticsQuery(0);

  useEffect(() => {
    if (isSuccess) {
      setRows(data);
    }
    setLoading(isLoading);
  }, [isSuccess, isLoading]);

  return (
    <>
      {loading ? (
        <Skeleton active />
      ) : (
        <div>
          <Table
            scroll={{
              x: 968,
              y: 768,
            }}
            pagination={{
              pageSize: 20,
              current: currentPage,
            }}
            columns={columns}
            dataSource={rows}
            onChange={(e) => {
              handleChangeTablePage(
                e,
                dispatch,
                setRows,
                setCurrentPage,
                setLoading,
                data
              );
            }}
          />
          <NewLinkDrawer />
        </div>
      )}
    </>
  );
};

export default LinksTable;
