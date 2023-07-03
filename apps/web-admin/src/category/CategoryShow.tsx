import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CATEGORY_TITLE_FIELD } from "./CategoryTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { PLACE_TITLE_FIELD } from "../place/PlaceTitle";

export const CategoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Icon" source="icon" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Event"
          target="categoryId"
          label="Events"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Category"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Date" source="date" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="Limit" source="limit" />
            <ReferenceField label="Owner" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Place" source="place.id" reference="Place">
              <TextField source={PLACE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Visibility" source="visibility" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Place"
          target="categoryId"
          label="Places"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Category"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Price" source="price" />
            <TextField label="Rating" source="rating" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="URI" source="uri" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
