import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FizzbuzzOk } from '../models/fizzbuzz-ok.model';
import { FizzbuzzError } from '../models/fizzbuzz-error.model';
import { environment } from '../../environments/environment';

const baseUrl = environment.API_URL;

@Injectable({
  providedIn: 'root'
})

/** Clase que expone metodos que se encargan de invocar los servicios del API REST FizzBuzz */
export class FizzbuzzServicesService {

  constructor(private http: HttpClient) { }

  getAllFizzBuzzOk(): Observable<FizzbuzzOk[]> {
    return this.http.get<FizzbuzzOk[]>(baseUrl + "/getAllOkResults");
  }

  getAllFizzBuzzError(): Observable<FizzbuzzError[]> {
    return this.http.get<FizzbuzzError[]>(baseUrl + "/getAllErrorResult");
  }

  getFizzBuzz(min: string, max: string): Observable<any> {
    return this.http.get(`${baseUrl}/${min}/${max}`);
  }

}