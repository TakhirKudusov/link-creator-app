import { Select } from "antd";
import styles from "./index.module.scss";
import { selectOptions } from "./constants";
import { Dispatch, SetStateAction, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setFilter } from "../../redux/slicers/filterSlicer";
import { handleRefetchData } from "./helpers";
import { setData } from "../../redux/slicers/dataSlicer";
import { setIsLoading } from "../../redux/slicers/formParametersSlicer";

const LinksSorter: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleChangeFilter = async (e: any[]) => {
    dispatch(setFilter(e));
    handleRefetchData(dispatch, e.join(""), "0");
  };

  return (
    <span className={styles["filter-container"]}>
      <Select
        className={styles["filter-container__selector"]}
        mode="multiple"
        placeholder="Select filter options"
        maxTagCount="responsive"
        options={selectOptions}
        onChange={async (e) => {
          await handleChangeFilter(e);
        }}
      />
    </span>
  );
};

export default LinksSorter;
