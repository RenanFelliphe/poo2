import { Controller, Get, Param } from '@nestjs/common';
import { CursosService } from './cursos.service.js';

@Controller('cursos')
export class CursosController {
    constructor(private readonly cursosService: CursosService) { }

    @Get('')
    getCursos() {
        return this.cursosService.getCursos()
    }

    @Get(':name')
    getCurso(@Param('name') name: string) {
        return `Informações sobre o curso técnico: ${name}`
    }
    
}
