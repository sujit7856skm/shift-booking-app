import AvailableShift from "../../screens/AvailableShift";
import MyShift from "../../screens/MyShift";
import { ROUTES_NAME } from "./routeConstant";

export const ROUTES = [
  {
    key: 1,
    name: ROUTES_NAME.myShift,
    component: MyShift,
  },
  {
    key: 2,
    name: ROUTES_NAME.availableShift,
    component: AvailableShift,
  },
];
