import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './profile.entity';

@Injectable()
export class ProfileService {

   constructor(@InjectRepository(Profile) private profileRepo: Repository<Profile>) {
      
   }

   async deleteById(id: number) {
      return await this.profileRepo.delete(id)
   }
}
