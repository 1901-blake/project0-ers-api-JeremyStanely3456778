export class Role {
  roleid: number; // primary key
  role: string; // not null, unique

  constructor(roleid = 0, role = '') {
      this.roleid = roleid;
      this.role = role;
  }
}