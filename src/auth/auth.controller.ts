import { Controller, Get, Param } from '@nestjs/common'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Get('delete/:id')
	deleteById(@Param('id') id) {
		return this.authService.deleteById(parseInt(id))
	}
}
