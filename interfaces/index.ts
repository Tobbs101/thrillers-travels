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

export interface trip_option_props {
  id: number;
  label: string;
  value: string;
}
