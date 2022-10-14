import { AppDatasource } from '../../../database/databaseConnect'
import { City } from '../../../entities/cidade'
import { FindOneOptions } from 'typeorm'

export const findAll = async () => {
  return AppDatasource.manager.find(City)
}

export const findOne = async (id: number) => {
  const param: FindOneOptions = { where: { ibge: id } }

  return AppDatasource.manager.findOne(City, param)
}
