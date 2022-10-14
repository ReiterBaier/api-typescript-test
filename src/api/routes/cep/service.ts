import { AppDatasource } from '../../../database/databaseConnect'
import { Cep } from '../../../entities/cep'
import { FindOneOptions } from 'typeorm'

export const findAll = async () => {
  return await AppDatasource.manager.find(Cep)
}

export const findOne = async (id: number) => {
  const param: FindOneOptions = { where: { cep: id } }

  return await AppDatasource.manager.findOne<Cep>(Cep, param)
}
