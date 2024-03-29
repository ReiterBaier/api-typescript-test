import { JsonController, Get, Param, HttpCode, OnUndefined } from 'routing-controllers'
import { findOne } from './service'

@JsonController('/cep')
export class CepController {
  @Get('/:cep')
  @HttpCode(200)
  @OnUndefined(500)
  getOne(@Param('cep') cep: number) {
    return findOne(cep)
  }
}
