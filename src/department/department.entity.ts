import { User } from 'src/auth/user.entity'
import {
	Column,
	Entity,
	JoinTable,
	ManyToMany,
	PrimaryGeneratedColumn,
} from 'typeorm'

@Entity()
export class Department {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@ManyToMany(() => User, (user) => user.departments, { onDelete: 'RESTRICT' })
	@JoinTable()
	users: User[]
}
