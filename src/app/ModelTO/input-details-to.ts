export class InputDetailsTO {
public  orgName:String = "";
public fields:String[] = [];    

constructor(orgName:String,fields:String[]){
  this.orgName=orgName;
  this.fields=fields;  
}

}
