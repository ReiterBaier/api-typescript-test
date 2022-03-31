import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity('CITY')
export class City {
  @PrimaryColumn()
  ibge: number

  @Column()
  uf: string

  @Column()
  nome: string
}
