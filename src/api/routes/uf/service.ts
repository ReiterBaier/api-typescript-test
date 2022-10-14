import { AppDatasource } from '../../../database/databaseConnect'
import { Uf } from '../../../entities/uf'
import { FindOneOptions } from 'typeorm'

export const findAll = async () => {
  return AppDatasource.manager.find(Uf)
}

export const findOne = async (ufId: number) => {
  const param: FindOneOptions = { where: { ufId: ufId } }

  const repo = await AppDatasource.getRepository(Uf).find({ relations: ['Pais'] })

  const teste2 = await AppDatasource.manager.findOne(Uf, param)

  return repo
}
