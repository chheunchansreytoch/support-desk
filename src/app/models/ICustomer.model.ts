export class ICustomer {
  id?: string;
  username: string | undefined;
  phone: string | undefined;
  email: string | undefined;
  password: string | undefined;
  imageDownloadUrl: string | undefined;
  imageFilePath: string | undefined;
  createdDate: string | undefined;
  updatedDate: string | undefined;
  customerDepartment!: {
    id?: string;
    name: string | undefined;
  };

  customerCompany!: {
    id?: string;
    name: string | undefined;
  };
}
