import { Component, OnInit, Input } from '@angular/core';
import {ShareMemoryComponent} from '../../components/share-memory/share-memory.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() validMessage:String='';
  constructor(private shareMemoryComponent : ShareMemoryComponent) { }
  ngOnInit(): void {
    this.validMessage=this.shareMemoryComponent.validMessage;
    console.log(this.validMessage);
  }
  

}
