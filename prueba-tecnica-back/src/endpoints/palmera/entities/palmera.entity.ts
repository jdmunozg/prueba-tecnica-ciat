import { Zona } from 'src/endpoints/zona/entities/zona.entity';
import { Plaga } from '../../plaga/entities/plaga.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('palmera')
export class Palmera {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @ManyToOne(() => Zona, { eager: true })
  @JoinColumn({ name: 'id_zona' })
  id_zona: number;

  @ManyToOne(() => Plaga, { eager: true })
  @JoinColumn({ name: 'id_plaga' })
  id_plaga: number;
}
