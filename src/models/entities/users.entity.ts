import { Expose, Transform } from 'class-transformer';
import { dateTransformer } from 'src/shares/helpers/transformer';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { HistoriesEntity } from './histories.entity';

@Entity({
    name: 'users'
})
export class UsersEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Expose()
    email: string;

    @Column()
    @Expose()
    password: string;

    @Column()
    @Expose()
    status: string;

    @Column({ name: 'phone_number' })
    @Expose()
    phone_number: string;

    @Column()
    @Expose()
    role: string;

    @Column({ name: 'is_online' })
    @Expose()
    isOnline: boolean;

    @OneToMany(() => HistoriesEntity, (history) => history.user)
    history: HistoriesEntity[];

    @CreateDateColumn({ name: 'created_at' })
    @Transform(dateTransformer)
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    @Transform(dateTransformer)
    updatedAt: Date;
}
