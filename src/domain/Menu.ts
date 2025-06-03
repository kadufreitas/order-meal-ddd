// import type { WithCurrentAdmin } from './User';

export type Menu = {
  id: number;
  name: string;
  protein: string[];
  base: string[];
  legumes: string[];
  followUp: string[];
  dateStart: Date;
  dateEnd: Date;
};

export type EditingMenu = {
  name?: string;
  protein?: string[];
  base?: string[];
  legumes?: string[];
  followUp?: string[];
  dateStart?: Date;
  dateEnd?: Date;
};

export type MenusHistory = {
  menus: Array<Menu>;
  count: number;
};
