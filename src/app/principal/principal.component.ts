import { Component, OnInit } from '@angular/core';
import { RecargaService } from '../services/recarga.service';
import { Recarga } from '../models/Recarga';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  usuario: any;
  recarga: Recarga = new Recarga();
  constructor(private recargasService: RecargaService) { }

  ngOnInit(): void {
    this.usuario = this.recargasService.getUsuarios();
  }

  public recargar() {
    if(this.recarga.monto == null || this.recarga.monto <= 0 
      || this.recarga.numTelefono ==null  || this.recarga.numTelefono.length <10 
      ||this.recarga.operador == null){
      alert("Ingrese un valores validos");
      return;
    }
    this.recargasService.ingresarRecarga(this.recarga).subscribe(
      data => {
        if (data.codigo == 1) {
          this.ngOnInit();
        } else {
          alert("Error al insertar" + data.mensaje);
        }
      },
      error => {
        alert('Error, los valores no coinciden en la base de datos');
      }
    )
  }
}
