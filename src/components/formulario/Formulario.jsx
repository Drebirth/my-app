import React from "react";
import './style.css'

function Formulario(){
    return(
     <div className="container">
    <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control"/>
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Senha</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword"/>
    </div>
  </div>
  <div  className="botoes">
  <input class="btn btn-outline-dark" type="submit" value="Entrar"/>
  </div>
  <div className="botoes">
  <a class="btn btn-outline-dark" href="#" role="button">Se cadastrar</a>
  </div>

        </div>
    )
}

export default Formulario;