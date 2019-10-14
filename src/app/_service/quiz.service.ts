import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from '../_model/model.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../utils/config.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  headers: any;
  baseURL: string;
  constructor(private http: HttpClient, private configService: ConfigService) {
    this.baseURL = configService.getApiURI();

    // console.log('head', headers);
    console.log('head2');

    // console.log(localStorage.getItem('auth_token'));
  }


  getQuiz(): Observable<Quiz[]> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': localStorage.getItem('auth_token')
      })
    };
console.log(httpOptions);

    return this.http.get<Quiz[]>(this.baseURL + '/Quizs', httpOptions);
  }

  getQuizById(Id: number) {
    this.http.get<Quiz[]>(this.baseURL + '/Quizs/' + Id).subscribe(result => {
      // this.forecasts = result;
    }, error => console.error(error));
  }

  deleteQuizById(Id: number) {
    this.http.delete<Quiz[]>(this.baseURL + '/Quizs/' + Id).subscribe(result => {
      // this.forecasts = result;
    }, error => console.error(error));
  }

  createQuiz(quiz: Quiz): Observable<Quiz[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': localStorage.getItem('auth_token')
      })
    };
    return this.http.post<Quiz[]>(this.baseURL + '/Quizs', quiz, httpOptions);
  }

  updateQuiz(quiz: Quiz): Observable<Quiz[]> {
    return this.http.put<Quiz[]>(this.baseURL + '/Quizs', quiz);
  }
}

