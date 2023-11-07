import { Component, Input } from '@angular/core';
import * as XLSX from 'xlsx'; 
import { InputDetailsTO } from '../ModelTO/input-details-to';
import { TemplateServiceService } from '../service/template-service.service';
import { InsertqueryTo } from '../ModelTO/insertquery-to';

type AOA = any[][];


@Component({
  selector: 'app-field-database-mapping',
  templateUrl: './field-database-mapping.component.html',
  styleUrls: ['./field-database-mapping.component.css']
})
export class FieldDatabaseMappingComponent {

  @Input() fieldsToExport: any[] = [];
  templateToExcel:string[][] = [];
  orgName:any = "Ltntp";
  inputDetailsTO!: InputDetailsTO;
  insertQueryTo!: InsertqueryTo;
  data: AOA = [];
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
    XLSX.writeFile(wb,this.orgName +".xlsx");
    this.inputDetailsTO = new InputDetailsTO(this.orgName,this.fieldsToExport);
    console.log("Input details TO value" + this.inputDetailsTO.orgName);
    console.log("Input details TO value" + this.inputDetailsTO.fields[0] + " " + this.inputDetailsTO.fields[1]);
    this.templateService.createSchema(this.inputDetailsTO).subscribe((data: any) =>{
    if(data!=null && data!=undefined){
     let response = data;
     console.log("Data value" + response); 
    }
    }
    );
  }

  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>evt.target;
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      console.log("bstr value is" + bstr);
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      console.log("WorkSheet Name is" + ws);

      /* save data */
      this.data = <AOA>XLSX.utils.sheet_to_json(ws, { header: 1 });
      console.log("Data value" + JSON.stringify(this.data));
    };
    reader.readAsBinaryString(target.files[0]);
    this.insertQueryTo = new InsertqueryTo(this.orgName,this.data);
    this.templateService.uploadData(this.insertQueryTo).subscribe((response
    )=>{
      let res = response;
     console.log("Data value" + res);  
    }
    );
  }
}
