import {AbstractControl} from '@angular/forms';

export function ageError(control:AbstractControl){
    if (control.value !=null){
        if (Number(control.value)<1)
            return {error:true,msg:'age should be greater than 0'};
        if (Number(control.value)>999)
            return {error:true, msg : 'age should be less than 999'};
        return null;   
    }
    else
        return {error:true,msg:'field should not be empty'}
}