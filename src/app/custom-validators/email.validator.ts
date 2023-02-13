import {AbstractControl} from '@angular/forms';

export function invalidMailFormatError(control:AbstractControl){
    if (control.value!=null && control.value != ''){
        const pattern = /^[a-zA-Z]+[0-9]*@[a-zA-Z]+\.[a-z]{3}$/;
        const result:boolean = pattern.test(control.value);
        if(! result)
            return {error :true,msg:'Invalid mail'}
        else
            return null;
    }
    else{
        return {error:true,msg:'Field should not be empty'};
        }
}