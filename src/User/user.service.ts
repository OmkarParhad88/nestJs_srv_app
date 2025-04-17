import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";

@Injectable()
export class UserSerivce {
  public users: User[] = [
    {
      username: "user1",
      password: "123",
      email: "user1@email.com"
    },
    {
      username: "user2",
      password: "1234",
      email: "user2@email.com"
    },
    {
      username: "user3",
      password: "12345",
      email: "user3@email.com"
    }
  ]

  getUserByName(username: string): User | undefined  {
    return this.users.find(user => user.username === username);
  }

}