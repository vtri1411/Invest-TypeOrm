import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get('generate')
	generate() {
		return this.appService.generate()
	}

	@Get()
	getUser() {
		return this.appService.getAllUser()
	}
}
