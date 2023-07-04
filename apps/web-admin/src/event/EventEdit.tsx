import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { CategoryTitle } from "../category/CategoryTitle";
import { InvitationTitle } from "../invitation/InvitationTitle";
import { PlaceTitle } from "../place/PlaceTitle";

export const EventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="attendees"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="Category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Description" multiline source="description" />
        <ReferenceArrayInput
          source="invitations"
          reference="Invitation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InvitationTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Limit" source="limit" />
        <ReferenceInput source="owner.id" reference="User" label="Owner">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="place.id" reference="Place" label="Place">
          <SelectInput optionText={PlaceTitle} />
        </ReferenceInput>
        <TextInput label="Title" source="title" />
        <SelectInput
          source="visibility"
          label="Visibility"
          choices={[
            { label: "Public", value: "public" },
            { label: "Friends", value: "friends" },
            { label: "Unlisted", value: "unlisted" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
