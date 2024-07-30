import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MENTEE_TITLE_FIELD } from "../mentee/MenteeTitle";
import { MENTOR_TITLE_FIELD } from "../mentor/MentorTitle";

export const SessionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Sessions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
