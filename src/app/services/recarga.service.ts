import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/Environments/environmets';
import { Recarga } from '../models/Recarga';

@Injectable({
  providedIn: 'root'
})
export class RecargaService {

  constructor(private http: HttpClient) { }

  public getUsuarios(){
    let url = environment.WS_PATH + "recarga/list"
    return this.http.get<any>(url)
  }

  public ingresarRecarga(recarga: Recarga){
    let url = environment.WS_PATH + "recarga"
    return this.http.post<any>(url, recarga)
  }
}
