import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/app-common/identity/user-service.service';
import { UserModel } from 'src/app/app-models/master/user-model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: UserModel = {

  };
  users: UserModel[] = [];
  constructor(private userService: UserServiceService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  public getAllUsers(): void {
    this.user = {}; 
    this.userService.getAll().subscribe(data => {
      this.users = data;
    });
  }

  public getUser(id?: string): void {
    this.userService.get(id).subscribe(data => {
      this.user = data;
    });
  }

  public create(): void {
    if (!this.validate())
      return;
    this.userService.create(this.user).subscribe(data => {
      this.getAllUsers();
    });
  }

  public update(): void {
    if (!this.validate())
      return;
    this.userService.update(this.user).subscribe(data => {
      this.getAllUsers();
    });
  }

  public delete(id?: string): void {
    this.userService.delete(id).subscribe(data => {
      this.getAllUsers();
    });
  }

  private validate(): boolean {
    if (this.user.firstName == null || this.user.firstName.length == 0) {
      alert("First name required");
      return false;
    }
    if (this.user.lastName == null || this.user.lastName.length == 0) {
      alert("Last name required");
      return false;
    }
    if (this.user.email == null || this.user.email.length == 0) {
      alert("Email required");
      return false;
    }
    if (this.user.password == null || this.user.password.length == 0) {
      alert("Password required");
      return false;
    }
    return true;
  }

}
