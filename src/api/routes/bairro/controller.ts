import { JsonController, Get, Param, HttpCode, OnUndefined } from 'routing-controllers'
import { findOne } from './service'

@JsonController('/bairro')
export class BairroController {
  @Get('/:id')
  @HttpCode(200)
  @OnUndefined(500)
  getOne(@Param('id') id: number) {
    return findOne(id)
  }
}
