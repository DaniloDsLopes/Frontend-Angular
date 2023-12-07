export class Cliente {
    codigo: number = 0;
    nome: string = "";
    email: string = "";
    senha: string = "";
    telefone: string = "";
    documento: string ="";
    resenha: string = "";

    
    constructor(obj?:Cliente){
        if(obj!=undefined){
            this.codigo = obj.codigo;
            this.nome = obj.nome;
            this.email = obj.email;
            this.senha = obj.senha;
            this.telefone = obj.telefone;
        }
    }
}