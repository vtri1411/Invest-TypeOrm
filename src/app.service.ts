import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './auth/user.entity'
import { Department } from './department/department.entity'
import { Profile } from './profile/profile.entity'
import { Task } from './task/task.entity'

@Injectable()
export class AppService {
	constructor(
		@InjectRepository(User) private userRepo: Repository<User>,
		@InjectRepository(Profile) private profileRepo: Repository<Profile>,
		@InjectRepository(Task) private taskRepo: Repository<Task>,
		@InjectRepository(Department) private departRepo: Repository<Department>
	) {}

	async generate() {
		const user1 = this.userRepo.create({ name: 'user1' })
		const user2 = this.userRepo.create({ name: 'user2' })
		const profile = this.profileRepo.create({ name: 'profile1' })
		const task1 = this.taskRepo.create({ name: 'task1' })
		const task2 = this.taskRepo.create({ name: 'task2' })
		const department1 = this.departRepo.create({ name: 'department1' })
		const department2 = this.departRepo.create({ name: 'department2' })

		profile.user = user1
		task1.user = user1
		task2.user = user1
		department1.users = [user1, user2]
		department2.users = [user1]

		await this.userRepo.save(user1)
		await this.userRepo.save(user2)
		await this.profileRepo.save(profile)
		await this.taskRepo.save(task1)
		await this.taskRepo.save(task2)
		await this.departRepo.save(department1)
		await this.departRepo.save(department2)
		return 'ok'
	}

	async getAllUser() {
		const result = await this.userRepo
			.createQueryBuilder('user')
			.leftJoinAndSelect('user.profile', 'profile')
			.leftJoinAndSelect('user.tasks', 'tasks')
			.leftJoinAndSelect('user.departments', 'departments')
			.getMany()
		return result
	}
}
