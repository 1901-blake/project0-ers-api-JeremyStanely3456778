export class Reimbursementtype {
typeid: number; // primary key
type: string; // not null, unique

constructor(id = 0, type = '') {
this.typeid = id;
this.type = type;
  }
}