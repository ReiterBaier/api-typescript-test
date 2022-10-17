import { JsonController, Get, Param, Body, Header, HttpCode, OnUndefined } from 'routing-controllers'
import { findOne } from './service'

@JsonController('/cidade')
export class CidadeController {
  @Get('/:cidadeId')
  @HttpCode(200)
  @OnUndefined(500)
  getOne(@Param('cidadeId') cidadeId: number) {
    return findOne(cidadeId)
  }
}
