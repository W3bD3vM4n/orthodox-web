import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { EmitType } from '@syncfusion/ej2-base';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrl: './dialog.component.css',
    encapsulation: ViewEncapsulation.None // Add this line to allow global styles
})
export class DialogComponent implements OnInit {

    public visible: Boolean = false;
    public imageIconUrl: string = '';
    public apiGetIdUrl: string = '';
    public celda: any = {};
    public tituloVentana: string = '';
    public fechaCivil: string = '';
    public fechaJuliana: string = '';
    public detalle: string = '';
    public tabDeshabilitado: boolean = false;
    public indiceDeTabActiva: number = 0;
    public soloLectura: boolean = true;

    // Muestra el cuadro de diálogo dentro del elemento
    public targetElement?: HTMLElement;

    @ViewChild('ejDialog') ejDialog: DialogComponent | any;
    // Crea una referencia para el elemento
    @ViewChild('container', { read: ElementRef, static: true }) container: ElementRef | any;

    constructor(private httpClient: HttpClient) { }

    // Obtiene todos los elementos
    ngOnInit(): void {
        this.initilaizeTarget();
    }

    // Inicializa el elemento
    public initilaizeTarget: EmitType<object> = () => {
        this.targetElement = this.container!.nativeElement.parentElement;
    }

    // Oculta el Diálogo con el botón del footer
    public hideDialog: EmitType<object> = () => {
        this.ejDialog!.hide();
    }

    // Habilita los botones del footer
    public buttons: Object = [
        {
            'click': this.hideDialog.bind(this),
            buttonModel: {
                content: 'Cerrar'
            }
        }
    ];

    // Llama al método show para abrir el Diálogo
    public onOpenDialog(): void {
        // resetea la primera tab
        this.indiceDeTabActiva = 0;
        this.ejDialog!.show();
    };

    // Llama al método getId de la celda
    public getId(idCelda: number): void {
        if (idCelda !== null || undefined) {
            this.imageIconUrl = 'assets/images/months/' + idCelda + '.jpg';
            this.apiGetIdUrl = environment.baseUrl+ '/api/Evento/' + idCelda;

            this.httpClient
            .get(this.apiGetIdUrl)
            .subscribe((data: any) => {
            this.celda = data;

                if (this.celda.tituloIcono !== null || undefined) {
                    this.tituloVentana = this.celda.diaCalendarioCivil + ': ' + this.celda.tituloIcono;
                }
                else {
                    this.tituloVentana = this.celda.diaCalendarioCivil;
                }

                this.fechaCivil = this.formatDate(this.celda.fechaInicio);
                this.fechaJuliana = this.formatDate(this.celda.diaCalendarioJuliano);
                this.detalle = this.celda.descripcionIcono;

                // Contenido 2do Tab
                if (this.celda.descripcionIcono !== null || undefined) {
                    this.tabDeshabilitado = false;
                } else {
                    this.tabDeshabilitado = true;
                }
            });
        }
    }

    // Esconde el toolbar del Editor
    public editorModules = {
        toolbar: false
    };

    // Formatea el tiempo obtenido del .json
    public formatDate(inputDate: string): string {
        // divide en la 'T' y tomando la primera parte
        const datePart = inputDate.split('T')[0];
        // regresa la fecha en formato 'YYYY-MM-DD'
        return datePart;
    }
}
