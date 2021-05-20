import { Component } from '@angular/core';

interface EventoTimeline {
  id?: number;
  tipoEvento?: string;
  resumen?: string;
  fecha?: string;
  icon?: string;
  color?: string;
  severidad?: string;
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
      fecha: '2021-05-16 00:00:00',
      icon: 'star_purple5000',
      color: '#239B56',
      severidad: '',
      estado: 'Nuevo',
      resumen: 'Evento de creación',
      isAnimated: false,
      classPos: 'rightPos'
    },
    {
      id: 2,
      tipoEvento: 'Editar',
      fecha: '2021-05-17 00:00:00',
      icon: 'edit',
      color: '#2980B9',
      severidad: '',
      estado: 'Editar',
      resumen: 'Evento de edición',
      isAnimated: true,
      classPos: 'rightPos'
    },
    {
      id: 3,
      tipoEvento: 'Eliminar',
      fecha: '2021-05-18 00:00:00',
      icon: 'clear',
      color: '#CB4335',
      severidad: '',
      estado: 'Borrado',
      resumen: 'Evento de borrado',
      isAnimated: false,
      classPos: 'rightPos'
    },
    {
      id: 4,
      tipoEvento: 'Agregar',
      fecha: '2021-05-19 00:00:00',
      icon: 'edit',
      color: '#F39C12',
      severidad: '',
      estado: 'Agregado',
      resumen: 'Evento de agregado',
      isAnimated: true,
      classPos: 'rightPos'
    }
  ];
}
