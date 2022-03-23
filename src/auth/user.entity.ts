import { Department } from 'src/department/department.entity'
import { Profile } from 'src/profile/profile.entity'
import { Task } from 'src/task/task.entity'
import {
	Column,
	Entity,
	ManyToMany,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
} from 'typeorm'

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@OneToOne(() => Profile, (profile) => profile.user, { onDelete: 'CASCADE' })
	profile: Profile

	@OneToMany(() => Task, (task) => task.user, { onDelete: 'CASCADE' })
	tasks: Task[]

	@ManyToMany(() => Department, (department) => department.users, {
		onDelete: 'RESTRICT',
	})
	departments: Department[]
}
