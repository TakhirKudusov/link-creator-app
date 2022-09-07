import { Skeleton, Table } from "antd";
import { DataType } from "./interfaces";
import { columns } from "./constants";
import { useGetStatisticsQuery } from "../../redux/APIs/statisticsAPI";
import { handleRefetchData } from "./helpers";
import { useDispatch } from "react-redux";
import NewLinkDrawer from "./NewLinkDrawer";
import { useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import { setIsLoading } from "../../redux/slicers/formParametersSlicer";
import { setData } from "../../redux/slicers/dataSlicer";

const LinksTable: React.FC = () => {
  const filter = useAppSelector<string>((state) => state.filter.filter);
  const dataRows = useAppSelector<DataType[]>((state) => state.data.data);
  const loading = useAppSelector<boolean>(
    (state) => state.formParameters.isLoading
  );
  const currentPage = useAppSelector<number>(
    (state) => state.formParameters.currentPage
  );
  const dispatch = useDispatch();

  useEffect(() => {
    handleRefetchData(dispatch, filter, "0");
  }, []);

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
            dataSource={dataRows}
            onChange={async (e) => {
              handleRefetchData(dispatch, filter, "", e);
            }}
          />
          <NewLinkDrawer />
        </div>
      )}
    </>
  );
};

export default LinksTable;
