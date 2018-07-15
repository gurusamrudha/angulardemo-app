import { Pipe, PipeTransform } from "@angular/core";
import { User } from "../models/user";

@Pipe({
  name: "UserTitle"
})

export class UserPipe implements PipeTransform{
  transform(firstname: string, lastname: string): string{
    if(lastname.toLowerCase()== 'gunda'){
      return "Miss. " + firstname;
    }
    else{
      return "Dear." + firstname;
    }


  }

}