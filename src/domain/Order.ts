import type { Meal } from './Meal';
import type { User, WithCurrentUser } from './User';

export type Item = {
  meal: Meal;
  quantity: number;
};

export type Order = {
  id: string;
  date: Date;
  items: Array<Item>;
  total: number;
};

export type EditingOrder = {
  items?: Array<Item>;
};

export type OrdersHistory = {
  orders: Array<Order>;
  count: number;
};

export type OrderRepository = {
  fromUserOrders: (User?: User) => Promise<OrdersHistory>;
  add: (EditingOrder: EditingOrder, WithCurrentUser: WithCurrentUser) => Promise<Order>;
  remove: (Order: Order, WithCurrentUser: WithCurrentUser) => Promise<void>;
  update: (EditingOrder: EditingOrder, WithCurrentUser: WithCurrentUser) => Promise<Order>;
};
