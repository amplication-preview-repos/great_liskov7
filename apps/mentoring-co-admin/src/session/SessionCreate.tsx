import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { FeedbackTitle } from "../feedback/FeedbackTitle";
import { MenteeTitle } from "../mentee/MenteeTitle";
import { MentorTitle } from "../mentor/MentorTitle";

export const SessionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Date" source="date" />
        <NumberInput step={1} label="Duration" source="duration" />
        <ReferenceArrayInput
          source="feedbacks"
          reference="Feedback"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FeedbackTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="mentee.id" reference="Mentee" label="Mentee">
          <SelectInput optionText={MenteeTitle} />
        </ReferenceInput>
        <ReferenceInput source="mentor.id" reference="Mentor" label="Mentor">
          <SelectInput optionText={MentorTitle} />
        </ReferenceInput>
        <SelectInput
          source="typeField"
          label="Type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
