
package com.portfolio.mec.Interface;

import com.portfolio.mec.Entity.Persona;
import java.util.List;


public interface IPersonaService {
    
    // Para traer una lista de persona
    public List<Persona> getPersona();
    
    //Para guardar un objeto de tipo Persona
    public void savePersona(Persona persona);
    
    //Para Eliminar un objeto pero lo buscamos por ID
    public void deletePersona(Long id);
    
    //Buscar una persona por ID
    public Persona findPersona(Long id);
    
}
