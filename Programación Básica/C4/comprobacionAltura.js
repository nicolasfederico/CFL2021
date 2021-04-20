let read=require ('readline-sync');
let altura= read.questionFloat ("Ingrese altura de la persona, en centimetros: " );

if (altura >= 130) {
    console.log (">>>>>>>>>>>>Puede ingresar a la atracción<<<<<<<<<<<<<")
}
else{
    console.log (">>>>>>>>>>>>No puede ingresar, ya que la altura de la persona es menor a la requerida para esta atracción<<<<<<<<<<<<<");
}