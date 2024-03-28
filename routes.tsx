import { Route } from "./interfaces";

export const routes: Route[] = [
  {
    id: 1,
    title: "Dashboard",
    icon: <i className="bi-house text-customBrown text-lg"></i>,
  },
  {
    id: 2,
    title: "Flights",
    icon: <i className="bi-airplane text-customBrown text-lg"></i>,
  },
  {
    id: 3,
    title: "Wallet",
    icon: <i className="bi-wallet text-customBrown text-lg"></i>,
  },
  {
    id: 4,
    title: "Reports",
    icon: <i className="bi-newspaper text-customBrown text-lg"></i>,
  },
  {
    id: 5,
    title: "Statistics",
    icon: <i className="bi-pie-chart text-customBrown text-lg"></i>,
  },
  {
    id: 6,
    title: "Settings",
    icon: <i className="bi-gear text-customBrown text-lg"></i>,
  },
];
