import { Controller, Get, Param, Put, Query } from '@nestjs/common';
import { CursosService } from './cursos.service.js';
import type { ICursos, ICurso } from './cursos.service.js';

@Controller('cursos')
export class CursosController {
    constructor(private readonly cursosService: CursosService) { }

    @Get()
    getCursos(): ICursos {
        return this.cursosService.getCursos();
    }

    @Get(":name")
    getCurso(@Param('name') name: string): string {
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

    @Get('pesquisa/periodo')
    getFiltroTurno(
        @Query('turno') turno: string
    ) {
        if (turno) {
            const cursos = this.cursosService.getCursos().cursos.filter((curso) => curso.turno.toString() == turno.toString())

            return cursos
        }
    }

    @Get('filtro/avancado')
    getFiltroAvancado(
        @Query('modalidade') modalidade?: string,
        @Query('vagas') vagas?: string
    ) {
        let filtro = {
            modalidade: 'Não Informado',
            vagas: 'Não Informado',
            resultado: 'Filtro aplicado com sucesso'
        }

        if (modalidade) {
            filtro = {
                ...filtro,
                modalidade: modalidade || '',
                vagas: vagas || ''
            }
        }

        return filtro
    }

    @Put(':id')
    putCursos(
        @Param('id') id?: number
    ){
        const cursos = this.cursosService.getCursos().cursos.find((curso) => curso.id == id)
        //finalizar -> Pegar o body e jogar no novo array. Atualmente, o meu PUT está fazendo um GET
        return(cursos)
    }
}
