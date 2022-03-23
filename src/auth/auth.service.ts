import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class AuthService {
   constructor(@InjectRepository(User) private userRepo: Repository<User>) {
      
   }

   async deleteById(id: number) {
      return await this.userRepo.delete(id)
   }
}
