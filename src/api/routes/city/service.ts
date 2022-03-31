import { AppDatasource } from 'src/database/databaseConnect'
import { City } from 'src/entities/city'
import { FindOneOptions } from 'typeorm'

export const findAll = async () => {
  return AppDatasource.manager.find(City)
}

export const findOne = async (id: number) => {
  const param: FindOneOptions = { where: { ibge: id } }

  return AppDatasource.manager.findOne(City, param)
}
