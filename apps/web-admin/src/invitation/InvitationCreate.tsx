import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { EventTitle } from "../event/EventTitle";
import { UserTitle } from "../user/UserTitle";

export const InvitationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="event.id" reference="Event" label="Event">
          <SelectInput optionText={EventTitle} />
        </ReferenceInput>
        <SelectInput
          source="kind"
          label="Kind"
          choices={[
            { label: "Friend Request", value: "friend_request" },
            { label: "Event Attendance", value: "event_attendance" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput
          source="recipient.id"
          reference="User"
          label="Recipient"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="sender.id" reference="User" label="Sender">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
