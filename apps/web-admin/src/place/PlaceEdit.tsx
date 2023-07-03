import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { CategoryTitle } from "../category/CategoryTitle";
import { EventTitle } from "../event/EventTitle";

export const PlaceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="Category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="events"
          reference="Event"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EventTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <NumberInput label="Price" source="price" />
        <NumberInput step={1} label="Rating" source="rating" />
        <TextInput label="URI" source="uri" />
      </SimpleForm>
    </Edit>
  );
};
