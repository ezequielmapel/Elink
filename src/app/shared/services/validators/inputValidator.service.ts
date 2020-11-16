import {Injectable, OnInit} from "@angular/core";
import {ComparatorValues, inputValidation} from "./inputValidation.model";


@Injectable()
export class InputValidatorService implements OnInit{

  constructor() {
  }

  ngOnInit(): void {
  }

  validate(value: string, option:any) :boolean {


    const validator = inputValidation.find( role => {

      if(role.type === option.type){
        if( !this.length(value, role.minLength) ){
          console.log("minlength");
          return false;
        }

        if( role.isRegex ){
          return this.compareRegex(value, role.compare);
        }

        if( role.compare ){
          return this.compare(value, role.compare);
        }

        return true;
      }
    });

    console.log(validator);

    return !!validator;
  }

  compare( value: string, comparator: ComparatorValues ) :boolean {
    let compare: boolean = false;

    if( !!comparator.accept.find(c => value.includes(c))){
      compare = true;
    }

    if( !!comparator.reject.find(c => value.includes(c)) ){
      compare = false;
    }

    return compare;
  }

  compareRegex( value: string, comparator:ComparatorValues ) : boolean{
    //console.log(value.match(comparator.accept[0]));
    console.log(value.match(comparator.reject[0]));
    return !!value.match(comparator.accept[0]) && !value.match(comparator.reject[0]);
  }

  length( value: string , size: number): boolean{
    return value.length >= size;
  }

}
