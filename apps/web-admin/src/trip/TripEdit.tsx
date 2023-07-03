import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PositionTitle } from "../position/PositionTitle";
import { UserTitle } from "../user/UserTitle";

export const TripEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateInput label="Day" source="day" />
        <ReferenceArrayInput
          source="positions"
          reference="Position"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PositionTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
