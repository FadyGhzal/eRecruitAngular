export class Usermodule {
    public id: number;
    public nom: string;
    public pass:string;
    public email:string;
    public acctype:string;

 
    constructor(id:number,user: string,pass:string,email:string,acctype:string) {
      this.id = id;
      this.nom = user;
      this.pass = pass;
      this.email = email;
      this.acctype = acctype;

    }
}