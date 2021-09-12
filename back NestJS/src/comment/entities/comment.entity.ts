import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('comments')
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: string;

    @Column()
    movie_id: string;

    @Column()
    user_name: string;

    @Column()
    text: string;
}