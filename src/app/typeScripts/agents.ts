export class Agent {
  n: Number;
  // all!:'';
  caseNumber: string;
  contactName: string;
  gender: string;
  subject: string;
  status: string;
  priority: string;

  // dateTime!:string;
  //caseOwner: string;

  constructor (n, caseNumber, contactName, gender, subject, status, priority) {
    this.n = n;
    this.caseNumber = caseNumber;
    this.contactName = contactName;
    this.gender = gender;
    this.subject = subject;
    this.status = status;
    this.priority = priority;
  }



  // n: "1",
  //     all: "",
  //     caseNumber: "00001002",
  //     contactName: "Chheun Chansreytoch",
  //     subject: "Dialog issues with text and form",
  //     status: "New",
  //     priority: "Low",
  //     dateTime: "5/19/2021, 2:07 PM",
  //     caseOwner: "Chheun Chansreytoch",
  //     option: "",
}
