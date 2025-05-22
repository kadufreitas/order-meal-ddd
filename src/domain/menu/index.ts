import type { WithCurrentAdmin } from '../user';

export type Menu = {
  id: number;
  name: string;
  protein: string;
  base: string;
  legumes: string;
  followUp: string;
  dateStart: Date;
  dateEnd: Date;
};

export type EditingMenu = {
  name?: string;
  protein?: string;
  base?: string;
  legumes?: string;
  followUp?: string;
  dateStart?: Date;
  dateEnd?: Date;
};

export type MenusHistory = {
  menus: Array<Menu>;
  count: number;
};

export type MenuRepository = {
  getMenusHistory: () => Promise<MenusHistory>;
  getThisWeekMenu: (date: Date) => Promise<Menu>;
  add: (EditingMenu: EditingMenu, WithCurrentAdmin: WithCurrentAdmin) => Promise<Menu>;
  remove: (Menu: Menu, WithCurrentAdmin: WithCurrentAdmin) => Promise<void>;
  update: (EditingMenu: EditingMenu, WithCurrentAdmin: WithCurrentAdmin) => Promise<Menu>;
};
