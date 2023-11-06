import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { InputDetailsTO } from '../ModelTO/input-details-to';


@Injectable({
  providedIn: 'root'
})
export class TemplateServiceService {

  header:any = "Access-Control-Allow-Origin: *";
  prefixUrl:string = "http://localhost:8080";

  constructor(private http: HttpClient) {
   }


  createSchema(inputDetailsTO:InputDetailsTO):any{
    let url = this.prefixUrl + "/create/orgtable";
    return this.http.post(url,inputDetailsTO,{headers:this.header});
  }

  uploadData(data:any){
    let url = this.prefixUrl + "/put/data";
    return this.http.post(url,data,{headers:this.header});
  }
  
}
