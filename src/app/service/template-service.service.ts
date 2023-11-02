import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { InputDetailsTO } from '../ModelTO/input-details-to';


@Injectable({
  providedIn: 'root'
})
export class TemplateServiceService {

  header:any = "Access-Control-Allow-Origin: *";

  constructor(private http: HttpClient) {
   }


  createSchema(inputDetailsTO:InputDetailsTO):any{
    let url = "http://localhost:8080/create/orgtable";
    return this.http.post(url,inputDetailsTO,{headers:this.header});
  }
}
