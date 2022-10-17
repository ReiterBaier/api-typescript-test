import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm'
import { Uf } from './uf'

@Entity('pais')
export class Pais {
  @PrimaryColumn({ name: 'paisId', select: false })
  id: number

  @Column()
  nome: string

  @OneToMany(() => Uf, uf => uf.pais, {
    nullable: true
  })
  uf: Uf[]
}
