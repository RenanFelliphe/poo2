import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

export interface ICursos {
    cursos: ICurso[]
}

export interface ICurso {
    id: number,
    nome: string,
    turno: string
}

@Injectable()
export class CursosService {
    getCursos(): ICursos {
        const cursos: ICursos = {
            cursos: [
                {
                    id: 1,
                    nome: 'Pré-ENEM',
                    turno: 'diurno'
                },
                {
                    id: 2,
                    nome: 'Inglês',
                    turno: 'vespertino'
                },
                {
                    id: 3,
                    nome: 'Desenvolvimento de Sistemas',
                    turno: 'noturno'
                }
            ]
        }

        return cursos
    }
}
