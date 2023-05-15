import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
 
  nombreEdu: string = '';
  descripcionEdu: string = '';
  idPersedu: number = 1;

  constructor(private educacionS: EducacionService, private router: Router) {}
  
  ngOnInit(): void {
  }

  onCreate(): void{
    const educacion = new Educacion(this.nombreEdu, this.descripcionEdu, this.idPersedu);
    this.educacionS.save(educacion).subscribe(
      data =>{
        alert("Educación añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Se produjo un Falló o ya existe");
        this.router.navigate(['']);
      }
    )
    
  }
  

}
