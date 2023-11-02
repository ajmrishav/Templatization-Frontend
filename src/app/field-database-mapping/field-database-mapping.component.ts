import { Component, Input } from '@angular/core';
import * as XLSX from 'xlsx'; 
import { InputDetailsTO } from '../ModelTO/input-details-to';
import { TemplateServiceService } from '../service/template-service.service';


@Component({
  selector: 'app-field-database-mapping',
  templateUrl: './field-database-mapping.component.html',
  styleUrls: ['./field-database-mapping.component.css']
})
export class FieldDatabaseMappingComponent {

  @Input() fieldsToExport: any[] = [];
  templateToExcel:string[][] = [];
  orgName:any = "Ai-tech";
  inputDetailsTO!: InputDetailsTO;

 filename :any = "Templatization.xlsx";

 constructor(private templateService:TemplateServiceService) { }

  ngOnInit(){
  console.log("Value in fields to export" + this.fieldsToExport.length);
    
  }
  exportData(){
    this.templateToExcel = [this.fieldsToExport,[]];
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.templateToExcel);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb,"test"+".xlsx");
    this.inputDetailsTO = new InputDetailsTO(this.orgName,this.fieldsToExport);
    console.log("Input details TO value" + this.inputDetailsTO.orgName);
    console.log("Input details TO value" + this.inputDetailsTO.fields[0] + " " + this.inputDetailsTO.fields[1]);
    this.templateService.createSchema(this.inputDetailsTO).subscribe((data: any) =>{
    if(data!=null && data!=undefined){
     let response = data;
     console.log("Data value" + response); 
    }
    });
    
  }
}
