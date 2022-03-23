import { Controller, Get, Param } from '@nestjs/common';
import { DepartmentService } from './department.service';

@Controller('department')
export class DepartmentController {
   constructor(private departService: DepartmentService) {}

	@Get('delete/:id')
	deleteById(@Param('id') id) {
		return this.departService.deleteById(parseInt(id))
	}
}
