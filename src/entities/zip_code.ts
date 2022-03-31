import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity('ZIP_CODE')
export class Zip_code {
  @PrimaryColumn()
  zip_code: number

  @Column()
  ibge: string

  @Column()
  street: string

  @Column()
  neighborhood: string
}
