import { Aluno } from "./aluno";
import { Formularios } from "./formularios";

export interface Empresas{
    cnpj:string,
    email: string,
    nome:string,
    nomeRepresentante: string,
    alunos?: Aluno[],
    formularios?: Formularios[]
}
