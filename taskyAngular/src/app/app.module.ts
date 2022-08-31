import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { ProjectManagementComponent } from './Pages/project-management/project-management.component';
import { LoginComponentComponent } from './Components/login-component/login-component.component';
import { RegisterComponentComponent } from './Components/register-component/register-component.component';
import { OverviewComponent } from './Components/overview/overview.component';
import { TaskTargetComponent } from './Components/task-target/task-target.component';
import { CreateTaskComponent } from './Components/create-task/create-task.component';
import { EditTaskComponent } from './Components/edit-task/edit-task.component';
import { CreateProjectComponent } from './Components/create-project/create-project.component';
import { LandingUserComponent } from './Pages/landing-user/landing-user.component';
import { InfoProjectComponent } from './Components/info-project/info-project.component';
import { HeaderComponent } from './Components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ProjectManagementComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    OverviewComponent,
    TaskTargetComponent,
    CreateTaskComponent,
    EditTaskComponent,
    CreateProjectComponent,
    LandingUserComponent, 
    InfoProjectComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
