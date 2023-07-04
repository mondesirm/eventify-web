import * as React from "react";
import { Button } from "@material-ui/core";
import axios from 'axios';

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { EVENT_TITLE_FIELD } from "./EventTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { PLACE_TITLE_FIELD } from "../place/PlaceTitle";

export const EventShow = (props: ShowProps): React.ReactElement => {
  const handleProposeAsSam = async () => {
    try {
      await axios({ method: 'post', url:`/events/:eventId/propose-sam`});
    } catch (error) {
      console.log('Error while proposing as Sam', error);
      alert('An error occured while proposing as Sam');
    }
  };

  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Invitation"
          target="eventId"
          label="Invitations"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Event" source="event.id" reference="Event">
              <TextField source={EVENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Kind" source="kind" />
            <ReferenceField label="Recipient" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Sender" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <Button
              type="button"
              variant="contained"
              onClick={handleProposeAsSam}>
              Propose as Sam
            </Button>
      </SimpleShowLayout>
    </Show>
  );
};
