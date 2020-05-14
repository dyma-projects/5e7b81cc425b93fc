import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  public users: BehaviorSubject<string[]> = new BehaviorSubject([]);

  constructor() {}

  addUser(username: string) {
    this.users.subscribe((user) => user.push(username));
    console.log(this.users.value);
  }
}
