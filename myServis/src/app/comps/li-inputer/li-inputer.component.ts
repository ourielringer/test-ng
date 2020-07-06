import { Component, OnInit } from '@angular/core';
import { InputerService } from 'src/app/serviser/inputer.service';

@Component({
  selector: 'app-li-inputer',
  templateUrl: './li-inputer.component.html',
  styleUrls: ['./li-inputer.component.css']
})
export class LiInputerComponent implements OnInit {

  constructor(public inpsev:InputerService) { }


  ngOnInit(): void {
  }

}
