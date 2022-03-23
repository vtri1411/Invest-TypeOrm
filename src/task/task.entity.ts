import { User } from 'src/auth/user.entity'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Task {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@Column()
	userId: number

	@ManyToOne(() => User, (user) => user.tasks, { onDelete: 'CASCADE' })
	user: User
}
