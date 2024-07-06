import store from "../store";

export type IRootStoreType = ReturnType<typeof store.getState>;
export type TServiceProp = {
  service: {
    id: number;
    name_ru: string;
    name: string;
    price: number;
  };
};
export type TService = {
  id: number;
  name_ru: string;
  name: string;
  price: number;
};
