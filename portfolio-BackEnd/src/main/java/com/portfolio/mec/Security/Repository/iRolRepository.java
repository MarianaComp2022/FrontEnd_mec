/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portfolio.mec.Security.Repository;

import com.portfolio.mec.Security.Entity.Rol;
import com.portfolio.mec.Security.Enums.RolNombre;
import java.util.Optional;

/**
 *
 * @author Mariana
 */
public interface iRolRepository {

    public Optional<Rol> findByRolNombre(RolNombre rolNombre);

    public void save(Rol rol);
    
}
