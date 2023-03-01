export interface User {
    id:string,
    username :string,
    email:string,
    active:boolean,
    addedOn:Date,
    modyficationDate:Date
    roles:Array<any>
  }