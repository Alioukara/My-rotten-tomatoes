import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('favorites')
export class Favorite {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: string;

    @Column()
    movie_id: string;

    @Column({default: null})
    movie_name: string;

   
}
