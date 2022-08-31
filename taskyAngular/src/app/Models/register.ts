import { UserModel } from "./user-model";

export class Register {

        public user: UserModel;
        public pass2:string;
    
        constructor(user:UserModel,pass2:string){
            this.user = user;
            this.pass2 = pass2;
        }
    }

