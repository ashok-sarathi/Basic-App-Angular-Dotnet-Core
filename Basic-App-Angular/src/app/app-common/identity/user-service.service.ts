import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/app-models/master/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(environment.appUrl + "User");
  }

  get(id?: string): Observable<UserModel> {
    return this.http.get<UserModel>(environment.appUrl + `User/${id}`);
  }

  create(model: UserModel): Observable<any> {
    return this.http.post(environment.appUrl + `User`, model);
  }

  update(model: UserModel): Observable<any> {
    return this.http.put(environment.appUrl + `User`, model);
  }

  delete(id?: string): Observable<any> {
    return this.http.delete(environment.appUrl + `User/${id}`);
  }
}
