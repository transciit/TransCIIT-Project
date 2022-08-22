export interface User {
  uid: string;
  email: string;
  displayname: string;
}
export type UserContextType = {
  user: User[];
};
