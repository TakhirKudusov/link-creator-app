import { NextRouter } from "next/router";
import { Page, pathNames, paths } from "../../routes/constants";
import { Dispatch, SetStateAction } from "react";
import { AppDispatch } from "../../redux/types";
import { clearAccessToken } from "../../redux/slicers/accessTokenSlicer";
import { clearUsername } from "../../redux/slicers/usernameSlicer";

const getSecondBreadCrumb = (route: NextRouter): string => {
  if (pathNames[route.pathname]) {
    return pathNames[route.pathname];
  } else {
    return "Not found";
  }
};

const handleExitClick = (router: NextRouter, dispatch: AppDispatch): void => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("username");
  dispatch(clearAccessToken());
  dispatch(clearUsername());
  router.push(paths[Page.LOGIN]);
};

export { getSecondBreadCrumb, handleExitClick };
