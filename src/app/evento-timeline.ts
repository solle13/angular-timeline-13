export interface EventoTimeline {
    id?: number;
    tipoEvento?: string|number;
    resumen?: string;
    fecha?:string;
    icon?: string;
    color?: string;
    severidad?: string;
    estado?: string;
    isAnimated?: boolean;
    classPos?: string;
    disabled?: boolean;
}
