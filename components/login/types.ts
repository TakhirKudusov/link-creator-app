import { UserArgs } from "../../redux/interfaces";

export type Form = UserArgs & {
  remember?: boolean;
};
