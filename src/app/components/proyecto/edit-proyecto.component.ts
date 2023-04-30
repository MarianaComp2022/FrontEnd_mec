import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ImageService } from 'src/app/service/image.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent {
  proyecto: Proyecto = null;

  constructor(private activatedRouter: ActivatedRoute,
    private proyectoService: ProyectoService,
    private router: Router,
    public imageService: ImageService) { }



  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoService.detail(id).subscribe(
      data => {
        this.proyecto = data;
      }, err => {
        alert("Error al Modificar la  Persona");
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
        alert("Error al modificar la Persona");
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
