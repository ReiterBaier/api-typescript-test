import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity('cidadelogradouro')
export class Cep {
  @PrimaryColumn()
  cidadelogradouroId: number

  @Column()
  cidadebairroId: number

  @Column()
  cep: number

  @Column()
  nome: string
}
