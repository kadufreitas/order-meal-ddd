export type User = {
  id: string;
  name: string;
  email: string;
  token: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Admin = User & {
  role: 'admin';
};

export type UserLogin = {
  email?: string;
  password?: string;
};

export type UserRegister = {
  name?: string;
  email?: string;
  password?: string;
};

export type UserUpdate = {
  name?: string;
  email?: string;
  password?: string;
};

export type WithCurrentUser = {
  currentUser?: User;
};

export type WithCurrentAdmin = {
  currentAdmin?: Admin;
};

export type UserRepository = {
  byAuthInfo: (UserLogin: UserLogin) => Promise<User>;
  // add: (UserRegister: UserRegister) => Promise<User>;
  update: (UserUpdate: UserUpdate, WithCurrentUser: WithCurrentUser) => Promise<User>;
  getByToken: (WithCurrentUser: WithCurrentUser) => Promise<User>;
};
