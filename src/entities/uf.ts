import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, Unique } from 'typeorm'
import { Pais } from './pais'

@Entity('uf')
@Unique('uf_decorator', ['nome', 'uf'])
export class Uf {
  @PrimaryColumn()
  ufId: number

  @Column()
  nome: string

  @Column()
  uf: string

  @ManyToOne(() => Pais, pais => pais.uf, {
    nullable: false
  })
  @JoinColumn({ name: 'paisId' })
  pais: Pais
}
