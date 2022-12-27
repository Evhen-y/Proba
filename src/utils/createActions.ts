import { TYPES } from "./createActionsType";

export { TYPES } from "./createActionsType";
import { AnyAction } from "redux";
export interface IActions {
  [key: string]: { [key: string]: (payload: Object, options?: Object, cb?: () => void) => AnyAction };
}

export const creatActions = (acType: string[]) => {
  const respons: IActions = {};
  acType.forEach((at) => {
    respons[at] = {};
    TYPES.forEach((t) => {
      respons[at][t] = (payload: Object, options?: Object, cb?: () => void) => ({
        type: `${at}_${t}`,
        payload,
        options,
        cb,
      });
    });
  });
  return respons;
};
