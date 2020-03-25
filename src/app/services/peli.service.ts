import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { iPelis } from '../model/iPelis.interface';

@Injectable({
  providedIn: 'root'
})
export class PeliService {

  constructor(private http: HttpClientModule) { }

  searchMovie() {

  }

  getDetails() {

  }
}
