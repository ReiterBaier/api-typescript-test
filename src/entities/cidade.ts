import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm'
import { Uf } from './uf'

@Entity('cidade')
export class Cidade {
  @PrimaryColumn({ name: 'cidadeId', select: false })
  id: number

  @Column()
  nome: string

  @Column()
  cod_ibge: number

  @ManyToOne(() => Uf, uf => uf.pais, {
    nullable: false
  })
  @JoinColumn({ name: 'ufId' })
  uf: Uf
}
