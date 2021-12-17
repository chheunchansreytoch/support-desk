export class AllMyCases {
  n: Number;
  all:'';
  caseNumber: string;
  contactName: string;
  subject: string;
  status: string;
  priority: string;
  dateTime:string;
  caseOwner: string;
  option: '';

  constructor (n, all, caseNumber, contactName, subject, status, priority, dateTime, caseOwner, option) {
    this.n = n;
    this.all = all;
    this.caseNumber = caseNumber;
    this.contactName = contactName;
    this.subject = subject;
    this.status= status;
    this.priority = priority;
    this.dateTime = dateTime;
    this.caseOwner = caseOwner;
    this.option = option;
  }

  // myCases = [
  //   {
  //     n: "1",
  //     all: "",
  //     caseNumber: "00001002",
  //     contactName: "Chheun Chansreytoch",
  //     subject: "Dialog issues with text and form",
  //     status: "New",
  //     priority: "Low",
  //     dateTime: "5/19/2021, 2:07 PM",
  //     caseOwner: "Chheun Chansreytoch",
  //     option: "",
  //   },
  //   {
  //     n: "2",
  //     all: "",
  //     caseNumber: "00001002",
  //     contactName: "Chheun Chansreytoch",
  //     subject: "Dialog issues with text and form",
  //     status: "New",
  //     priority: "Low",
  //     dateTime: "5/19/2021, 2:07 PM",
  //     caseOwner: "Chheun Chansreytoch",
  //     option: "",
  //   },

  //   {
  //     n: "3",
  //     all: "",
  //     caseNumber: "00001002",
  //     contactName: "Chheun Chansreytoch",
  //     subject: "Dialog issues with text and form",
  //     status: "New",
  //     priority: "Low",
  //     dateTime: "5/19/2021, 2:07 PM",
  //     caseOwner: "Chheun Chansreytoch",
  //     option: "",
  //   },
  // ]
}
