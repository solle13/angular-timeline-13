import { Component } from '@angular/core';

interface EventoTimeline {
  id?: number;
  tipoEvento?: string;
  resumen?: string;
  fecha?: Date;
  icon?: string;
  color?: string;
  severidad?: number;
  estado?: string;
  isAnimated?: boolean;
  classPos?: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'timeline';

  array: Array<EventoTimeline> = [
    {
      id: 1,
      tipoEvento: 'Creación',
      fecha: new Date('2021-05-16 00:00:00'),
      icon: 'star_purple5000',
      color: '#239B56',
      severidad: 1,
      estado: 'Nuevo',
      resumen: 'Evento de creación',
      isAnimated: false,
      classPos: 'rightPos'
    },
    {
      id: 2,
      tipoEvento: 'Editar',
      fecha: new Date('2021-05-17 00:00:00'),
      icon: 'edit',
      color: '#2980B9',
      severidad: 1,
      estado: 'Editar',
      resumen: 'Evento de edición',
      isAnimated: true,
      classPos: 'rightPos'
    },
    {
      id: 3,
      tipoEvento: 'Eliminar',
      fecha: new Date('2021-05-18 00:00:00'),
      icon: 'e14c',
      color: '#CB4335',
      severidad: 1,
      estado: 'Borrado',
      resumen: 'Evento de borrado',
      isAnimated: false,
      classPos: 'rightPos'
    },
    {
      id: 4,
      tipoEvento: 'Agregar',
      fecha: new Date('2021-05-19 00:00:00'),
      icon: 'edit',
      color: '#F39C12',
      severidad: 1,
      estado: 'Agregado',
      resumen: 'Evento de agregado',
      isAnimated: true,
      classPos: 'rightPos'
    }
  ];
}
