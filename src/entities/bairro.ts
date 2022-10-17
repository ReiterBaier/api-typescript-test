import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm'
import { Cidade } from './cidade'

@Entity('cidadebairro')
export class Bairro {
  @PrimaryColumn({ name: 'cidadebairroId', select: false })
  id: number

  @Column()
  nome: string

  @ManyToOne(() => Cidade, cidade => cidade.uf, {
    nullable: false
  })
  @JoinColumn({ name: 'cidadeId' })
  cidade: Cidade
}
