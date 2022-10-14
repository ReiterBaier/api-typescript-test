import { Entity, Column, PrimaryColumn, OneToMany, OneToOne, ManyToOne, ManyToMany } from 'typeorm'
import { Uf } from './uf'

@Entity('pais')
export class Pais {
  @PrimaryColumn()
  paisId: number

  @Column()
  nome: string
}
