import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { InputerService } from 'src/app/serviser/inputer.service';

@Component({
  selector: 'app-intuter',
  templateUrl: './intuter.component.html',
  styleUrls: ['./intuter.component.css']
})
export class IntuterComponent implements OnInit {

  constructor(private inpli:InputerService) { }

  @ViewChild("inp")inp1:ElementRef
  
  inputerFN(newValue:string):void{
    
    this.inpli.inparr.push(newValue)

    console.log(newValue ,this.inpli.inparr)

    this.inp1.nativeElement.value = ""
  }

  klicker(val:string):void{
    console.log(val);
  }

  ngOnInit(): void {
  }

}
