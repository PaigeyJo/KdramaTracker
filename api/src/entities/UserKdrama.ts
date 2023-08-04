import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('user_kdramas')
class UserKdrama extends BaseEntity {
    constructor(
        id: number,
        user_id: number,
        kdrama_id: number,
        episodes_watched: number,
        rating: number,
        started_on: Date,
        finished_on: Date,
        created_at: Date,
        updated_at: Date
    ) {
        super();
        this.id = id;
        this.user_id = user_id;
        this.kdrama_id = kdrama_id;
        this.episodes_watched = episodes_watched;
        this.rating = rating;
        this.started_on = started_on;
        this.finished_on = finished_on;
        this.created_at = created_at;
        this.updated_at = updated_at;
    };

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "int" })
    user_id: number;

    @Column ({ type: "int"})
    kdrama_id: number;


    @Column({ type: "int" })
    episodes_watched: number;

    @Column({ type: "int"})
    rating: number;

    @Column({ type: "timestamptz" })
    started_on: Date;

    @Column({ type: "timestamptz"})
    finished_on: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;   
};

export default UserKdrama;