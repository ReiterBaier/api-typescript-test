import { AppDatasource } from '../../../database/databaseConnect'
import { Cidade } from '../../../entities/cidade'
import { FindOneOptions } from 'typeorm'

export const findAll = async () => {
  return AppDatasource.manager.find(Cidade)
}

export const findOne = async (cidadeId: number) => {
  const param: FindOneOptions = {
    where: { cidadeId: cidadeId },
    relations: ['uf', 'uf.pais']
  }

  const cidade = await AppDatasource.getRepository(Cidade).manager.findOne(Cidade, param)

  console.log(cidade)

  return cidade
}
