import { JsonController, Get, Param, Body, Header, HttpCode, OnUndefined } from 'routing-controllers'
import { findOne } from './service'

@JsonController('/uf')
export class UfController {
  @Get('/:ufId')
  @HttpCode(200)
  @OnUndefined(500)
  getOne(@Param('ufId') ufId: number) {
    return findOne(ufId)
  }
}
