import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm'
import { Bairro } from './bairro'

@Entity('cidadelogradouro')
export class Cep {
  @PrimaryColumn({ name: 'cidadelogradouroId' })
  id: number

  @Column()
  cep: number

  @Column({ name: 'nome' })
  logradouro: string

  @ManyToOne(() => Bairro, bairro => bairro.cidade, {
    nullable: false
  })
  @JoinColumn({ name: 'cidadebairroId' })
  bairro: Bairro
}
