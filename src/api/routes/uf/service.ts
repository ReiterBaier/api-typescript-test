import { AppDatasource } from '../../../database/databaseConnect'
import { Uf } from '../../../entities/uf'
import { FindOneOptions } from 'typeorm'

export const findAll = async () => {
  return AppDatasource.manager.find(Uf)
}

export const findOne = async (ufId: number) => {
  const param: FindOneOptions = {
    where: { ufId: ufId },
    relations: ['pais']
  }

  const uf = await AppDatasource.getRepository(Uf).manager.findOne(Uf, param)

  console.log(uf)

  return uf
}
