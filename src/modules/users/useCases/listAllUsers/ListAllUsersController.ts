import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    const user_id: string = request.headers.user_id
      ? request.headers.user_id.toString()
      : "";

    const all = this.listAllUsersUseCase.execute({ user_id });

    return response.json(all);
  }
}

export { ListAllUsersController };
