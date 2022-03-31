import { JsonController, Get, Param, Body, Header, HttpCode } from 'routing-controllers'

@JsonController('/city')
export class CityController {
  @Get('')
  @HttpCode(200)
  getAll() {
    return 'Quer os dados da cidade? passe o código IBGE como url path!'
  }

  @Get('/:ibge')
  @HttpCode(200)
  getOne(@Param('ibge') ibge: number) {
    return ibge
  }
}
