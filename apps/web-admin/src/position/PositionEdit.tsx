import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TripTitle } from "../trip/TripTitle";

export const PositionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Coordinates" source="coordinates" />
        <ReferenceInput source="trip.id" reference="Trip" label="Trip">
          <SelectInput optionText={TripTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
