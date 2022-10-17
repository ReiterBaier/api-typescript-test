import { AppDatasource } from '../../../database/databaseConnect'
import { Bairro } from '../../../entities/bairro'
import { FindOneOptions } from 'typeorm'

export const findOne = async (id: number) => {
  const param: FindOneOptions = {
    where: { id: id },
    relations: ['cidade', 'cidade.uf', 'cidade.uf.pais']
  }

  const getOneBairro = await AppDatasource.getRepository(Bairro).manager.findOne(Bairro, param)

  console.log(getOneBairro)

  return getOneBairro
}
