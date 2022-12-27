export const TYPES = ["REQUEST", "SUCCESS", "FAILURE"];
export interface ICreateActionsType {
  [key: string]: { [key: string]: string };
}
export const createActionsTypes = (actType: string[]): ICreateActionsType => {
  const response: ICreateActionsType = {};
  actType.forEach((at) => {
    response[at] = {};
    TYPES.forEach((t) => {
      response[at][t] = `${at}_${t}`;
    });
  });
  return response;
};
