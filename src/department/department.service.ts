import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from './department.entity';

@Injectable()
export class DepartmentService {
   constructor(@InjectRepository(Department) private departRepo: Repository<Department>) {
      
   }

   async deleteById(id: number) {
      return await this.departRepo.delete(id)
   }
}
