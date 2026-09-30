import { Injectable } from '@nestjs/common';

@Injectable()
export class CursosService {
  
    getCursos() {
        return ['PRÉ-ENEM', 'Inglês', 'Inteligência Artificial']
    }
}
