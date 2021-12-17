export class IAgentDepartment {
  id?: string;
  username: string | undefined;
  gender: string | undefined;
  email: string | undefined;
  password: string | undefined;
  imageDownloadUrl: string | undefined;
  imageFilePath: string | undefined;
  createdBy: any;
  updatedBy: any;
  department_id!: [{
    id?: string;
    name: string | undefined;
  }];
}
