import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('zona')
export class Zona {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;
}
