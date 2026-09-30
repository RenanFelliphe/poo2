import { Injectable } from '@nestjs/common';

export interface IDisciplina {
  disciplina: string,
  carga_horaria: number,
  semestre: number,
  ativo: boolean
}

@Injectable()
export class AppService {
  getHello(): string {
    return ('Bem-vindo ao SENAI');
  }

  getInfo(): IDisciplina {
    const info: IDisciplina = {
      disciplina: "Matemática",
      carga_horaria: 100,
      semestre: 2,
      ativo: true
    }

    return (info)
  }
}
