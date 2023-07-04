import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TripTitle } from "../trip/TripTitle";

export const PositionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Coordinates" source="coordinates" />
        <ReferenceInput source="trip.id" reference="Trip" label="Trip">
          <SelectInput optionText={TripTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
