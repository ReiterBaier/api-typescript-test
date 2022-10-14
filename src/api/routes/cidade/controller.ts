import { JsonController, Get, Param, Body, Header, HttpCode, OnUndefined } from 'routing-controllers'
import { findOne } from './service'

@JsonController('/city')
export class CityController {
  @Get('/:ibge')
  @HttpCode(200)
  @OnUndefined(500)
  getOne(@Param('ibge') ibge: number) {
    return findOne(ibge)
  }
}
