import { Component, OnInit } from '@angular/core';
import { Quiz } from '../_model/model.interface';
import { FormBuilder, Validators } from '@angular/forms';
import { QuizService } from '../_service/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  /** quiz ctor */
      dataSaved = false;
      quizForm: any;
      allQuiz: Quiz[];
      quizIdUpdate = null;
      massage = null;
      constructor(private formbulider: FormBuilder, private quizServices: QuizService) {

      }
      ngOnInit() {
          this.quizForm = this.formbulider.group({
              QuizName: ['', [Validators.required]],
              QuizImage: ['', [Validators.required]],
              Route: ['', [Validators.required]],
              // Gender: ['', [Validators.required]],
              // Address: ['', [Validators.required]],
              // PinCode: ['', [Validators.required]],
          });
          this.loadAllQuiz();
      }
      loadAllQuiz() {
          this.quizServices.getQuiz().subscribe((data) => {
              this.allQuiz = data;
              console.log(data);
          });
      }

      onFormSubmit() {
          this.dataSaved = false;
          const quiz = this.quizForm.value;
          this.CreateQuiz(quiz);
          this.quizForm.reset();
      }
      CreateQuiz(quiz: Quiz) {
          if (this.quizIdUpdate == null) {
              this.quizServices.createQuiz(quiz).subscribe(
                  () => {
                      this.dataSaved = true;
                      this.massage = 'Record saved Successfully';
                      this.loadAllQuiz();
                      this.quizIdUpdate = null;
                      this.quizForm.reset();
                  }
              );
          } else {
              quiz.QuizID = this.quizIdUpdate;
              this.quizServices.updateQuiz(quiz).subscribe(() => {
                  this.dataSaved = true;
                  this.massage = 'Record Updated Successfully';
                  this.loadAllQuiz();
                  this.quizIdUpdate = null;
                  this.quizForm.reset();
              });
          }
      }

      resetForm() {
          this.quizForm.reset();
          this.massage = null;
          this.dataSaved = false;
      }
  }

