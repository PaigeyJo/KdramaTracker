import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm';

@Entity('kdramas')
class KDrama extends BaseEntity {

    constructor(
        id: number,
        name: string,
        poster_image: string,
        episode_count: number,
        airing: boolean,
        created_at: Date,
        updated_at: Date
    ) {
        super();
        this.id = id;
        this.name = name;
        this.poster_image = poster_image;
        this.episode_count = episode_count;
        this.airing = airing;
        this.created_at = created_at;
        this.updated_at = updated_at;
    };

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255 })
    name: string;

    @Column({ type: "varchar", length: 255 })
    poster_image: string;

    @Column({ type: "int" })
    episode_count: number;

    @Column({ type: "boolean" })
    airing: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
};

export default KDrama;
