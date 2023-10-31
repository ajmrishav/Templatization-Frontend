import { Component, Input } from '@angular/core';
import * as XLSX from 'xlsx'; 

@Component({
  selector: 'app-field-database-mapping',
  templateUrl: './field-database-mapping.component.html',
  styleUrls: ['./field-database-mapping.component.css']
})
export class FieldDatabaseMappingComponent {

  @Input() fieldsToExport: any[] = [];
  templateToExcel:string[][] = [];

 filename :any = "Templatization.xlsx";



  ngOnInit(){
  console.log("Value in fields to export" + this.fieldsToExport.length);
    
  }
  exportData(){
    this.templateToExcel = [this.fieldsToExport,[]];
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.templateToExcel);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb,"test"+".xlsx");
    }
}
