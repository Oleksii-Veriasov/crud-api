interface IUser {  
  id: string;
  username: string;
  age: number;
  hobbies: string[];
}

interface ICandidate {
  username: string;
  age: number;
  hobbies: string[];
}

export { IUser, ICandidate };