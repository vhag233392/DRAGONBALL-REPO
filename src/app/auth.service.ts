import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.hasToken());
  public isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  constructor(private router: Router) {}

  // Verificar si hay un token en el almacenamiento local
  private hasToken(): boolean {
    return !!localStorage.getItem('authToken');
  }

  // Iniciar sesión
  login(username: string, password: string): Observable<boolean> {
    // Simular una llamada API de autenticación, por ejemplo, con un mock
    if (username === 'admin' && password === '1234') {
      localStorage.setItem('authToken', 'fake-jwt-token');
      this.isAuthenticatedSubject.next(true);
      return new Observable(observer => observer.next(true));
    } else {
      return new Observable(observer => observer.next(false));
    }
  }

  // Cerrar sesión
  logout(): void {
    localStorage.removeItem('authToken');
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }

  // Verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }
}
