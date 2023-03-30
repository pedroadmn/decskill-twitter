import { User } from "./user";

export interface Tweet {
  id: string;
  content: string;
  user: User
}
