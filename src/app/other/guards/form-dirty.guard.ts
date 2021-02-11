import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate} from '@angular/router';
import {Observable} from 'rxjs';
import {OtherDocumentationComponent} from '../other-documentation/other-documentation.component';
import {IFormDirty} from './form-dirty';

@Injectable({
  providedIn: 'root'
})
export class FormDirtyGuard implements CanDeactivate<IFormDirty> {
  canDeactivate(component: IFormDirty, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (component.form.dirty) {
      return confirm('Your form is not submitted.Are you sure you want to leave the page?');
    }

    return true;
  }


}
