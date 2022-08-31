import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Shared/user-service.service';
import { FormGroup, NgForm } from '@angular/forms';
import { UserModel } from 'src/app/Models/user-model';
import { Register } from 'src/app/Models/register';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.scss']
})

export class RegisterComponentComponent implements OnInit {

  public myForm?: FormGroup;
  public user: UserModel;
  public register: Register;
  public passCheck: string = "Passwords don't match";

  constructor(public userService:UserServiceService) {
    this.user = new UserModel("","");
    this.register = new Register(this.user,"");
   }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){

    let passValue = form.value.password;
    console.log(passValue);
    console.log(form.value);

    if(passValue != this.register.pass2){
      console.log(this.register.pass2 + " pass2");
      console.log("Passwords don't match");
    }else{
      console.log("Form values: " + form.value);
      this.userService.register(form.value).subscribe((data:any) =>
      {
        console.log(data);
      })

    }

  }
}
