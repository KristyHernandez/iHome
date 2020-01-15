import { user1 } from './usuario';
import { colonia } from "./colonia";
export class anuncio {
id_anuncio: number;
anuncio: string;
descripcion: string;
direccion: string;
telefono: string;
fecha_inicio: string;
fecha_fin: string;
anuncio_activo: boolean;
anuncio_views: string;
id_user: number;
id_colonia_barrio: string;
latitud: number;
longitud: number;
numero_cuartos: number;
garaje: boolean;
mascotas: boolean;
cocina: boolean;
amueblado: boolean;
sala: boolean;
lavanderia: boolean;
precio: number;
usuario_: string;
colonia_: colonia;



}