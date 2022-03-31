import { AppDatasource } from 'src/database/databaseConnect'
import { Zip_code } from 'src/entities/zip_code'
import { FindOneOptions } from 'typeorm'

export const findAll = async () => {
  return AppDatasource.manager.find(Zip_code)
}

export const findOne = async (id: number) => {
  const param: FindOneOptions = { where: { zip_code: id } }

  return AppDatasource.manager.findOne(Zip_code, param)
}
