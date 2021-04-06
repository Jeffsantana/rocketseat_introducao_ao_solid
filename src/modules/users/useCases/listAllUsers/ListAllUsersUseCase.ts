import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    const verifyUserExist = this.usersRepository.verifyAdmin(user_id);
    const users = this.usersRepository.list();
    return users;
  }
}

export { ListAllUsersUseCase };
