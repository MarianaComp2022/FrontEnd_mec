import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectoService } from 'src/app/service/proyecto.service';
 
@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {
  proyecto: Proyecto = null;
  nombre: string = '';
  descripcion: string = '';
  proy_url: string = '';
  idPersproy: number = 1;

  constructor(private activatedRouter: ActivatedRoute,
    private proyectoService: ProyectoService,
    private router: Router) { }
  
  
  
  ngOnInit(): void {
  }

  onCreate(): void {
    const proy = new Proyecto(this.nombre, this.descripcion, this.proy_url, this.idPersproy);
    this.proyectoService.save(proy).subscribe(
      data => {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló la carga del Proyecto");
        this.router.navigate(['']);
      }
    )
  }
  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoService.update(id, this.proyecto).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error manejar la imagen del Proyecto");
        this.router.navigate(['']);
      }
    )
  }
}
