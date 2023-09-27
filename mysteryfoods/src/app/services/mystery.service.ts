import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Box } from '../modelo/box';

const base_url = environment.basePath+'/mysteryBox';
@Injectable({
  providedIn: 'root'
})
export class MysteryService {

  constructor(private http: HttpClient) {}
  getMysteryBoxes() {
    const endpoint=base_url+'/getAll';
    return this.http.get<Box[]>(endpoint);
  }
  getMysteryBoxId(id: any) {
    const endpoint=`${base_url}/getById/${id}`;
    return this.http.get<Box>(endpoint);
  }

  addMysteryBox(m_box: Box) {
    const endpoint=`${base_url}/insert`;
    return this.http.post<Box>(endpoint, m_box);
  }
}
