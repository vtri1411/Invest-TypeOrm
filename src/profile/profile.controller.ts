import { Controller, Get, Param } from '@nestjs/common'
import { ProfileService } from './profile.service'

@Controller('profile')
export class ProfileController {
	constructor(private profileService: ProfileService) {}

	@Get('delete/:id')
	deleteById(@Param('id') id) {
		return this.profileService.deleteById(parseInt(id))
	}
}
