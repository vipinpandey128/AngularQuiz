import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  _apiURI: string;

  constructor() {
    this._apiURI = 'http://api2.webscrackers.com/api';
   // this._apiURI = 'https://localhost:44315/api';
  }

  getApiURI() {
    return this._apiURI;
  }
}
