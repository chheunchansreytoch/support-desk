export interface IDialogData {
  title: string;
  type: string;
  content: string;
}

export interface IOneFieldDialogData {
  title: string;
  value?: string;
  label?: string;
  externalData?: any;
}

export interface IFormDialogData {
  title: string;
  type: string;
  content: string;
  externalData: any;
}
