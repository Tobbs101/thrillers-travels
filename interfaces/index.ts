export interface Route {
  id: number;
  title: string;
}

export interface nav_item_props {
  item: Route;
  activeIndex: number;
  toggleID: any;
  index: number;
}
