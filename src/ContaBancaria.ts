export class ContaBancaria{
  private _numeroConta: string
  private _titular: string
  private _saldo: number = 0
  private _ativa: boolean = true

  constructor(numeroConta: string, titular: string){
    this._numeroConta = numeroConta
    this._titular = titular
  }

  get numeroConta(): string {
       return this._numeroConta
  }

  set numeroConta(numeroConta: string) {
       this._numeroConta = numeroConta
  }

  get titular(): string{
       return this._titular
  }
  set titular(titular: string) {
       this._titular = titular
  }

  get saldo(): number {
       return this._saldo
  }  

  set saldo(saldo: number) {
       this._saldo = saldo
  }

  get ativa(): boolean {
       return this._ativa
  }  

  set ativa(ativa: boolean) {
      this._ativa = ativa
  }

  public depositar(valor:number): void{
    if(valor <= 0){
      throw new Error("Não é possível valores menores que 0")
    }
    this._saldo += valor;
  }

  public sacar(valor: number): void{
    if(valor<= 0){
      throw new Error("Adicione um número maior que 0.")
    }
    if(valor > this._saldo){
      throw new Error("Saldo insuficiente para saque.")
    }
    this._saldo -= valor;
  }

  public transferir(valor: number, destino: ContaBancaria): void{
    if(valor > this._saldo){
      throw new Error("Valor insuficiente para transferir.")
    }
    
  this.sacar(valor);
  destino.depositar(valor);
  }
}
