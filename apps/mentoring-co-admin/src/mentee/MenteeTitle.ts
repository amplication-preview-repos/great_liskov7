import { Mentee as TMentee } from "../api/mentee/Mentee";

export const MENTEE_TITLE_FIELD = "name";

export const MenteeTitle = (record: TMentee): string => {
  return record.name?.toString() || String(record.id);
};
