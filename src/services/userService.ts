import { IUser, ICandidate } from "../interfaces";
import { v4 as uuidv4 } from "uuid";

class UsersService {
  public users: IUser[];

  constructor() {
    this.users = [];
  }

  async apiGetUsers(): Promise<IUser[]> {
    return this.users;
  }

  async apiCreateUser(body: ICandidate): Promise<IUser> {
    console.log("body:", body);
    let prepareUser = {
      id: uuidv4(),
      username: body.username,
      age: body.age,
      hobbies: body.hobbies,
    };
    console.log(prepareUser);
    this.users.push(prepareUser);
    return prepareUser;
  }

  async apiGetUser(id: string): Promise<any> {
    return this.users.find((user: IUser) => user.id === id);
  }

  // async apiDeleteUser(id: string): Promise<IUser> {
  //   
  // }

  // async apiUpdateUser(
  //   id: string,
  //   { username, age, hobbies }: ICandidate
  // ): Promise<IUser> {
  //   return this.users.find((user: IUser) => if(user.id === id){
  //     user.username = username;
  //     user.age = age;
  //     user.hobbies = hobbies;
  //   })
  // }
}

export default new UsersService();
