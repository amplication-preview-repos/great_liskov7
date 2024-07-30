import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { SESSION_TITLE_FIELD } from "./SessionTitle";
import { MENTEE_TITLE_FIELD } from "../mentee/MenteeTitle";
import { MENTOR_TITLE_FIELD } from "../mentor/MentorTitle";

export const SessionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date" source="date" />
        <TextField label="Duration" source="duration" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Mentee" source="mentee.id" reference="Mentee">
          <TextField source={MENTEE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Mentor" source="mentor.id" reference="Mentor">
          <TextField source={MENTOR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Feedback"
          target="sessionId"
          label="Feedbacks"
        >
          <Datagrid rowClick="show">
            <TextField label="Comments" source="comments" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Rating" source="rating" />
            <ReferenceField
              label="Session"
              source="session.id"
              reference="Session"
            >
              <TextField source={SESSION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
