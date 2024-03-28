export interface Route {
  id: number;
  title: string;
  icon: any;
}

export interface nav_item_props {
  item: Route;
  activeIndex: number;
  toggleId: any;
}
