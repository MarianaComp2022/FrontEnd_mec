import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {
  proyecto: Proyecto = null;
  nombre: string = '';
  descripcion: string = '';
  img: string = '';

  constructor(private activatedRouter: ActivatedRoute,
    private proyectoService: ProyectoService,
    private router: Router,
    public imageService: ImageService) { }
  
  ngOnInit(): void {
  }

  onCreate(): void {
    const proy = new Proyecto(this.nombre, this.descripcion, this.img);
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
    this.proyecto.img = this.imageService.url
    this.proyectoService.update(id, this.proyecto).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error manejar la imagen del Proyecto");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event: any) { 
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "proy_"+id;
    this.imageService.uploadImage($event, name)
  }
}
