import { Registro } from "./Registro";

export class Usuario{
    nombre?: string;
    numCelular?: string;
    saldo?: number;
    operador?: string;
    registro?: Registro[] = [];
}

