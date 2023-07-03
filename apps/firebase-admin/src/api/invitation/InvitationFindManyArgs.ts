import { InvitationWhereInput } from "./InvitationWhereInput";
import { InvitationOrderByInput } from "./InvitationOrderByInput";

export type InvitationFindManyArgs = {
  where?: InvitationWhereInput;
  orderBy?: Array<InvitationOrderByInput>;
  skip?: number;
  take?: number;
};
