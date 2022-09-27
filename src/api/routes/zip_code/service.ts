import { AppDatasource } from '../../../database/databaseConnect'
import { Zip_code } from '../../../entities/zip_code'
import { FindOneOptions } from 'typeorm'

export const findAll = async () => {
  return await AppDatasource.manager.find(Zip_code)
}

export const findOne = async (id: number) => {
  const param: FindOneOptions = { where: { zip_code: id } }

  return await AppDatasource.manager.findOne<Zip_code>(Zip_code, param)
}
