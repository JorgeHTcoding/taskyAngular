import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Shared/user-service.service';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/Models/user-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  public user: UserModel; 

  constructor(public userService: UserServiceService, private router: Router) {
    this.user = new UserModel("", "");
  }

  public onSubmit(form: NgForm) {    
    this.userService.login(this.user).subscribe((data: any) => {
      if (data.error == true) {
        this.userService.logged = false;
        this.userService.user == null;       
        
      } else {
        this.userService.logged = true;
        this.userService.user = data.result;
        this.userService.user = data[0];
        console.log("estado logueo: " + this.userService.logged)
        console.log("este es la id del usuario: " + this.userService.user.Id_User)

        if (this.userService.user.rol == 0) {
          this.router.navigateByUrl('/landing-user')

        }
      }
    })
  }

  ngOnInit(): void {
  }

}
