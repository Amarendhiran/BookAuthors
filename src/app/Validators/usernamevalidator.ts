import { AbstractControl, ValidationErrors } from '@angular/forms';

export class usernameValidator
{
    static cannotContainSpace(control :AbstractControl) : ValidationErrors |null
        { 
            if( (control.value as string).startsWith("@"))
                return {cannotContainSpace:'correcta adi'};
        }
    static mustbeUnique(control: AbstractControl) : Promise<ValidationErrors | null>
    {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                if (control.value == 'amar')
                    resolve({mustbeUnique : true});
                else if (control.value == '1234')
                    {
                        resolve(null);
                        //reject ({userDataError: control.status});
                    }
                else
                    resolve ({usererror : 'user error'});
                
            }, 2000);
        });
    }
}