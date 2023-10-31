import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'selflearn';
  fields :any[] = [];
  orgFields: any[] = [];


  populateData(){
   this.fields.push(
    { "value":"",
      "name": "Field" + (this.fields.length +1)});
  }
  fillInputValue(field:any , position:any){
    this.fields[position] = field;
  }

  sendData(){
    this.fields.forEach( (element) => {
      this.orgFields.push(element.value);
  }); 
  }
}
