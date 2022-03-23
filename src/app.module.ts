import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProfileModule } from './profile/profile.module'
import { TaskModule } from './task/task.module'
import { DepartmentModule } from './department/department.module'
import { Task } from './task/task.entity'
import { User } from './auth/user.entity'
import { Profile } from './profile/profile.entity'
import { Department } from './department/department.entity'

@Module({
	imports: [
		TypeOrmModule.forRoot(),
		TypeOrmModule.forFeature([Task, User, Profile, Department]),
		AuthModule,
		ProfileModule,
		TaskModule,
		DepartmentModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
