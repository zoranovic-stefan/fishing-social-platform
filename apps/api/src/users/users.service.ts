import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUsers(): { id: number; email: string}[] {
    return [
      { id: 1, email: 'test@test.com'},
    ]
  }

  getUser(id: string): { id: number; email: string} {
    return { id: parseInt(id), email: 'test@test.com' };
  }
}
