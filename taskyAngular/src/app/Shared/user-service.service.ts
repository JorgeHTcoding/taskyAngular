import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { UserModel } from '../Models/user-model';
import { Register } from '../Models/register';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs';
import { registerLocaleData } from '@angular/common';
import { provideProtractorTestingSupport } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  public url: string = "";
  public logged:boolean;
  public user!: UserModel;  

  constructor(private http: HttpClient) {
    this.logged = false;
   }

   register(user:UserModel):Observable<object>{
    this.url="localhost:4200/landing-page"
    console.log("URL: " + this.url);
    console.log("Service user name: " + this.user.nick);
    return this.http.post<UserModel>(this.url,user);
   }

   login(user:UserModel):Observable<object>{
    this.url="localhost:4200/landing-page"
    console.log("Logged user: " + user);
    console.log("Front user id: " + user.Id_User);
    return this.http.post(this.url,user);
   }
}
