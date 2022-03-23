import { Controller, Get, Param } from '@nestjs/common'
import { TaskService } from './task.service'

@Controller('task')
export class TaskController {
	constructor(private taskService: TaskService) {}

	@Get('delete/:id')
	deleteById(@Param('id') id) {
		return this.taskService.deleteById(parseInt(id))
	}
}
