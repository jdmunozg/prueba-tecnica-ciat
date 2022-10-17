import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('plaga')
export class Plaga {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  nombre_cientifico: string;

  @Column()
  forma_control: string;
}
