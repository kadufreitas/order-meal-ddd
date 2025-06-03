import type { User, WithCurrentUser } from './User';

export type Meal = {
  id: string;
  protein: string;
  base: string;
  legumes: string;
  followUp: string;
};

export type EditingMeal = {
  protein?: string;
  base?: string;
  legumes?: string;
  followUp?: string;
};

export type MealsHistory = {
  meals: Array<Meal>;
  count: number;
};

export type MealRepository = {
  fromUserMeals: (User?: User) => Promise<MealsHistory>;
  // getMeal: (id, WithCurrentUser) => Promise<Meal>,
  add: (EditingMeal: EditingMeal, WithCurrentUser: WithCurrentUser) => Promise<Meal>;
  remove: (Meal: Meal, WithCurrentUser: WithCurrentUser) => Promise<void>;
  update: (EditingMeal: EditingMeal, WithCurrentUser: WithCurrentUser) => Promise<Meal>;
};

// export const updateArticle = (oldArticle: ?Article, updatedArticle: ?Article): ?Article =>
//   isSameArticle(oldArticle, updatedArticle) ? updatedArticle : oldArticle;

// export const isSameArticle = (articleA: ?Article, articleB: ?Article): bool =>
//   !!(articleA && articleB) && articleA.slug === articleB.slug;
