import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { MENTEE_TITLE_FIELD } from "../mentee/MenteeTitle";
import { MENTOR_TITLE_FIELD } from "./MentorTitle";

export const MentorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Age" source="age" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Experience" source="experience" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Skills" source="skills" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Session"
          target="mentorId"
          label="Sessions"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Date" source="date" />
            <TextField label="Duration" source="duration" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Mentee"
              source="mentee.id"
              reference="Mentee"
            >
              <TextField source={MENTEE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Mentor"
              source="mentor.id"
              reference="Mentor"
            >
              <TextField source={MENTOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
