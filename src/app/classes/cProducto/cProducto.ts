export class CProducto{
   public codp: string;
   public desp: string;
   public valp: number;
   public fecha: Date;
   
   constructor()
   {
       this.codp="";
       this.desp="";
       this.valp=0;
       this.fecha=new Date();
   }
}