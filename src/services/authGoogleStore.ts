import { User } from "firebase/auth";

const store = localStorage;

const prefix = "@AuthFirebase:";
const tokenKey = `${prefix}token`;
const userKey = `${prefix}user`;

const setToken = (token: string) => store.setItem(tokenKey, token);
const getToken = (): string | null => store.getItem(tokenKey);

const setUser = (user: User) => store.setItem(userKey, JSON.stringify(user));
const getUser = (): User | null => {
  const user = store.getItem(userKey);

  return user ? JSON.parse(user) : null;
};

const clearTokens = () => {
  store.removeItem(tokenKey);
  store.removeItem(userKey);
};

export { setToken, getToken, setUser, getUser, clearTokens };
