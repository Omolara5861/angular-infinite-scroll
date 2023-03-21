import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat } from '../model/cat';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient) { }

  getAllCats(page: number): Observable<Cat[]>{
    return this.http.get<Cat[]>(`https://api.thecatapi.com/v1/breeds?page=${page}&limit=10`) as Observable<Cat[]>;
  }

}
