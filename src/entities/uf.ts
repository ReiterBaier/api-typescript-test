import { Entity, Column, PrimaryColumn, JoinColumn, OneToMany, ManyToMany, ManyToOne } from 'typeorm'
import { Pais } from './pais'

@Entity('uf')
export class Uf {
  @PrimaryColumn()
  ufId: number

  @Column()
  nome: string

  @Column()
  uf: string

  @ManyToOne(() => Pais, pais => pais.paisId)
  @JoinColumn({ name: 'paisId', referencedColumnName: 'paisId' })
  paisId: Pais
}
