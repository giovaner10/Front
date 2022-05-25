import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
    private router: Router){

  }


  /**
   * Metodo guard para autenticação do usuario na aplicação, só permite que um usuarii navegue pela aplicação caso seu login esteja autorizado 
   * @param route as rotas que vão redirecinar o usuario que, caso esteja autorizado, poderá navegar pelo sistema, ou caso contrario, irá o levar esse usuario à página de login
   * @param state o estado atual do usuario, se ele está autenticado ou não 
   * @returns um boolean, onde a partir dele o usuario do sistema vai poder entrar no sistema ou não 
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      let auth = this.authService.isAuthenticated()

      if(auth){
        this.router.navigate(['home'])
        return true;

      }else{
        this.router.navigate(['login'])
        return false
      }
  }

}
