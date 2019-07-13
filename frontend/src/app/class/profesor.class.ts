export class Profesor {
public ced_profesor: string;
public password: string;
public nombre: string;
  public apellido: string;
  public sexo: string;
  public direccion: string;
  public correo: string;
  public celular: number;


constructor(
ced_profesor: string,
password: string,
nombre: string,
apellido: string,
sexo: string,
direccion: string,
correo: string,
celular: number) {

this.ced_profesor = ced_profesor;
this.password = password;
this.nombre = nombre;
this.apellido = apellido;
this.sexo = sexo;
this.direccion = direccion;
this.correo = correo;
this.celular = celular;

}

}
