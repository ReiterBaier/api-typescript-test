import { JsonController, Get, Param, Body, Header } from 'routing-controllers'

@JsonController('/city')
export class CityController {
  @Get('')
  getAll() {
    return 'sopinha'
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return id
  }
}
