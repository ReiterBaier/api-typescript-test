import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm'
import { Pais } from './pais'

@Entity('uf')
export class Uf {
  @PrimaryColumn({ name: 'ufId', select: false })
  id: number

  @Column()
  nome: string

  @Column({ name: 'uf' })
  sigla: string

  @ManyToOne(() => Pais, pais => pais.uf, {
    nullable: false
  })
  @JoinColumn({ name: 'paisId' })
  pais: Pais
}
