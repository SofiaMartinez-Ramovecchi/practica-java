export class CalculateService{
  constructor(){
    this.calculadora=null;
  }
  async getResultByCalculate( num1 , num2 , operation ){
  let result = 0 ;
  switch (operation) {
      case "sumar":
        result =  num1 + num2;
        console.log("entro aca");
      break;
      case "restar":
        result = num1 - num2;
      break;
      case "multiplicar":
        result = num1 * num2;
      break;
      default:
        console.log("error en el switch");
        throw new Error("No se encontró operacion valida."); //TODO: preguntarle a martin si esta excepcion se recibe o es un error como explico con async
      break;
    }
    return result;
  }

  
}

export default new CalculateService();
