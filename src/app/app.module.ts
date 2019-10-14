import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './question/question.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './_service/user.service';
import { QuestionService } from './_service/question.service';
import { QuizService } from './_service/quiz.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { ConfigService } from './utils/config.service';
import {ToastrModule} from 'ngx-toastr';
import { ToastService } from './_service/toast.service';
import { ToastMessageService } from './_service/toast-message.service';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuestionComponent,
    BlogComponent,
    LoginComponent,
    RegisterComponent,
    NavMenuComponent,
    HomeComponent,
    SpinnerComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    RouterModule.forRoot([
        { path: 'quiz', component: QuizComponent },
        { path: 'question', component: QuestionComponent },
        { path: 'login', component: LoginComponent },
        { path: 'home', component: HomeComponent },
    ]),
    NgbModule
  ],
  providers: [UserService, QuizService, QuestionService, ConfigService,ToastService,ToastMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
