import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity('pais')
export class Pais {
  @PrimaryColumn()
  paisId: number

  @Column()
  nome: string
}
