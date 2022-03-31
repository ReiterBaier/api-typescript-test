import { JsonController, Get, Param, Body, Header, HttpCode, OnUndefined } from 'routing-controllers'
import { findOne } from './service'

@JsonController('/zip_code')
export class CityController {
  @Get('/:zip')
  @HttpCode(200)
  @OnUndefined(500)
  getOne(@Param('zip') zip: number) {
    return findOne(zip)
  }
}
