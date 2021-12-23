export class ICase {
  id?: string;
  caseNumber: string | undefined;
  subject: string | undefined;
  description: string | undefined;
  createdDate: string | undefined;
  updatedDate: string | undefined;
  assignedDate: string | undefined;
  customer: any;
  manager: any;
  agent: any;
}
