import { Body, Controller, Get, Post } from '@nestjs/common';
import { PistaService } from './pista.service';
import { PistaEntity } from './pista.entity/pista.entity';


@Controller('api/pista')
export class PistaController {

  constructor(private readonly pistaService: PistaService){}

@Get('pistas')
getPistas():PistaEntity[]{
  return  this.pistaService.getPistas();
}
@Post('crear')
  public crearPista(@Body() body):any{
    return this.pistaService.crearPista(body)
  }

}
