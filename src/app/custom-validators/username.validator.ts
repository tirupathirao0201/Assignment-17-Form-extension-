import { AbstractControl } from "@angular/forms";

export function usernameError(control:AbstractControl){
    const startwithalphabetpattern =/^[a-zA-Z]/;
    const isstartwithalphabet:boolean=startwithalphabetpattern.test(control.value);
    if (control.value!=null && control.value != '')
        if (isstartwithalphabet){
            const alphanumericpattern =/^[a-zA-Z0-9_-]+$/;
            if (control.value !=null && control.value.indexOf(' ')!=-1)
                    return {error:true, msg: "no spaces allowed"}
            else{
                const alphanumericpattern =/^[a-zA-Z0-9_-]+$/;
                const isalphanumeric:boolean=alphanumericpattern.test(control.value);
                if (isalphanumeric){
                    return null;
                }
                else{
                    return {error:true, msg: "no special characters allowed"};
                }
            }
        }
        else
            return {error:true,msg:"should start with alphabet"}
    else{
        return {error:true,msg:"field should not be empty"}
    }
}
