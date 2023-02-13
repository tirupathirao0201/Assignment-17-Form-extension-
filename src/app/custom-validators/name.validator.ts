import {AbstractControl} from '@angular/forms';

export function NameError(control:AbstractControl){
    if (control.value!=null && control.value != ''){

        if(control.value.length<3)
            return {error:true,msg:'minimum length of name should be atleast 3 character'}
        
        if (control.value>256)
            return {error:true,msg:'maximum length of name should be atmost 256 characters'}
        
        return null;   
    }
    else{
        return {error:true,msg:'field should not be empty'};
        }
}

