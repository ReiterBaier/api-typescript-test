import { AppDatasource } from '../../../database/databaseConnect'
import { Cep } from '../../../entities/cep'
import { FindOneOptions } from 'typeorm'

export const findOne = async (cep: number) => {
  const param: FindOneOptions = {
    where: { cep: cep },
    relations: ['bairro', 'bairro.cidade', 'bairro.cidade.uf', 'bairro.cidade.uf.pais']
  }

  const getOneCep = await AppDatasource.getRepository(Cep).manager.findOne(Cep, param)

  console.log(getOneCep)

  return getOneCep
}
