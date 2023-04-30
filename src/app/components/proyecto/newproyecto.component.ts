import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { Router } from '@angular/router';
import { ProyectoService } from 'src/app/service/proyecto.service';

import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {
  nombre: string = '';
  descripcion: string = '';
  img: string = '';

  constructor(private sProyecto: ProyectoService , private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proy = new Proyecto(this.nombre, this.descripcion, this.img);
    this.sProyecto.save(proy).subscribe(
      data => {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló la carga del Proyecto");
        this.router.navigate(['']);
      }
    )
  }
}
