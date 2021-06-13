import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';


@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {

    constructor(private router: Router,) { }

    notLogged(): boolean {
        const userId = localStorage.getItem('geo-doctor-userId');
        const token = localStorage.getItem('geo-doctor-token');
        return (isNullOrUndefined(userId) || isNullOrUndefined(token));
    }

    canActivate(): boolean {
        if (this.notLogged()) {
            return true;
        } else {
            this.router.navigateByUrl('/tabs');
            return false;
        }
    }

}
