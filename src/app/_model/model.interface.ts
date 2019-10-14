
export interface Quiz {
  QuizID: number;
  QuizName: string;
  QuizImage: string;
  Route: string;
}

export interface Credentials {
  email: string;
  password: string;
}

export class Tocken {
  tokenString: string;
}
