export interface Route {
  id: number;
  title: string;
}

export interface NavItemProps {
  item: Route;
  activeIndex: number;
  toggleID: any;
  index: number;
}
