import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private activatedRouter: ActivatedRoute, private proyectoS: ProyectoService , private router: Router, public imageService: ImageService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proy = new Proyecto(this.nombre, this.descripcion, this.img);
    this.proyectoS.save(proy).subscribe(
      data => {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló la carga del Proyecto");
        this.router.navigate(['']);
      }
    )
  }
  uploadImage($event: any) { 
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "proyecto_"+id;
    this.imageService.uploadImage($event, name)
  }


}
