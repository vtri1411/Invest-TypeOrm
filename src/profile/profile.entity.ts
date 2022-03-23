import { User } from 'src/auth/user.entity'
import {
	Column,
	Entity,
	JoinColumn,
	OneToOne,
	PrimaryGeneratedColumn,
} from 'typeorm'

@Entity()
export class Profile {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@OneToOne(() => User, (user) => user.profile, { onDelete: 'CASCADE' })
	@JoinColumn()
	user: User
}
