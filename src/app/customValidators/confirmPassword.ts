import { AbstractControl } from '@angular/forms';

export class ConfirmPassword {
    static MatchPassword(control: AbstractControl) {
        let password = control.get('password').value;

        let confirmPassword = control.get('confirmPassword').value;

        if (password != confirmPassword) {
            control.get('confirmPassword').setErrors({ ConfirmPassword: true });
        } else {
            return null
        }
    }
}

export class ConfirmChangePassword {
    static MatchPassword(control: AbstractControl) {
        let password = control.get('newPassword').value;

        let confirmPassword = control.get('confirmPassword').value;

        if (password != confirmPassword) {
            control.get('confirmPassword').setErrors({ ConfirmPassword: true });
        } else {
            return null
        }
    }
}

