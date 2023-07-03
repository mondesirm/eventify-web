import { Invitation as TInvitation } from "../api/invitation/Invitation";

export const INVITATION_TITLE_FIELD = "id";

export const InvitationTitle = (record: TInvitation): string => {
  return record.id || String(record.id);
};
