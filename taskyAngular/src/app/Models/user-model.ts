export class UserModel {
    
    public Id_User:number;
    public nick:string;
    public password:string;
    public rol:number;

    constructor(nick:string,password:string){

        this.Id_User = 0;
        this.nick = nick;
        this.password = password;
        this.rol = 0;
    }
}
