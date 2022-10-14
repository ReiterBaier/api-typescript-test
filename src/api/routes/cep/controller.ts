import { JsonController, Get, Param, Body, Header, HttpCode, OnUndefined } from 'routing-controllers'
import { findOne } from './service'

@JsonController('/cep')
export class CityController {
  @Get('/:cep')
  @HttpCode(200)
  @OnUndefined(500)
  getOne(@Param('cep') cep: number) {
    return findOne(cep)
  }
}
