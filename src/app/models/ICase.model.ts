export class ICase {
  id?: string;
  caseNumber: string | undefined;
  subject: string | undefined;
  description: string | undefined;
  createdDate: string | undefined;
  updatedDate: string | undefined;
  assignedDate: string | undefined;
  customer!: [{
    id?: string;
    username: string | undefined;
    phone: string  | undefined;
    email: string | undefined;
    imageDownloadUrl: string | undefined;
    imageFilePath: string | undefined;
  }];
  manager!: [{
    id?: string;
    username: string | undefined;
    email: string | undefined;
    imageDownloadUrl: string | undefined;
    imageFilePath: string | undefined;
  }];
  agent!: [{
    id?: string;
    username: string | undefined;
    gender: string | undefined;
    email: string | undefined;
    password: string | undefined;
    imageDownloadUrl: string | undefined;
    imageFilePath: string | undefined;
    department_id: [{
      id?: string;
      name: string | undefined;
    }];
  }];
  status!: [{
    id?: string;
    name: string | undefined;
  }];
  priority!: [{
    id?: string;
    name: string | undefined;
  }];
}
