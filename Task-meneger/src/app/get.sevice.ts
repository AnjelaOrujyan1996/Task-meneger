import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GetService {

  constructor(private http: HttpClient) {}
  getAll(){
    return this.http.get('http://localhost:3000/api/project/')
  }
}
