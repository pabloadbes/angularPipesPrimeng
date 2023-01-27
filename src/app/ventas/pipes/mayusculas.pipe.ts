import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

    transform( text: string, flag: boolean = true ): string {
        return flag ? text.toUpperCase()
                    : text.toLowerCase();
    }
}