import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<any> {
    return this.http.get(environment.appUrl + "User?Id=584570ce-c0b0-412d-bd68-1fc11aa88b21");
  }

}
