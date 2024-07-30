import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MentorList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Mentors"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Age" source="age" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Experience" source="experience" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Skills" source="skills" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
