import { Controller, Get, Param } from '@nestjs/common';
import { CursosService } from './cursos.service.js';

@Controller('cursos')
export class CursosController {
    constructor(private readonly cursosService: CursosService) { }

    @Get()
    getCursos(): string[] {
        return this.cursosService.getCursos();
    }

    @Get(":name")
    getCurso(@Param('name') name: string): string {
        console.log(name)
        return `Informações sobre o curso técnico: ${name}`
    }

    @Get(":sigla/modulo/:numero")
    getModulo(
        @Param('sigla') sigla: string,
        @Param('numero') numero: number
    ) {
        return {
            curso: sigla,
            moduloConsultado: numero
        }
    }
}
