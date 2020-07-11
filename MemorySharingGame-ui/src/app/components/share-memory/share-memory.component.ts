import { Component, OnInit } from '@angular/core';
import {MemorySharingGameService} from '../../services/memory-sharing-game.service';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-share-memory',
  templateUrl: './share-memory.component.html',
  styleUrls: ['./share-memory.component.css']
})
export class ShareMemoryComponent implements OnInit {

  shareMemoryForm : FormGroup;
  validMessage: String ="";

  constructor(private memorySharingGameService : MemorySharingGameService, private router: Router) { }

  ngOnInit(): void {
    this.shareMemoryForm = new FormGroup({
      sharedFromNumber : new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      sharedToNumber : new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]), 
      textContent : new FormControl('',[Validators.required])
    });
  }

  resetValidMessage(){
    console.log("inside reset");
    this.shareMemoryForm.reset();
    this.validMessage="";
  }
  get sharedFromNumber() {
    return this.shareMemoryForm.get('sharedFromNumber');
} 
get sharedToNumber() {
  return this.shareMemoryForm.get('sharedToNumber');
} 

  submitRegistration(){
    if(this.shareMemoryForm.valid){
     
      this.memorySharingGameService.postMemory(this.shareMemoryForm.value).subscribe(
        data=>{
          this.validMessage="Memory has been shared to your friend, you will recieve a text once your friend guessed you";
          this.shareMemoryForm.reset();
          return true;
        },
        err=>{
          console.log(err);
          console.log(err.error.message);
          this.validMessage="Oops! not able to send SMS to this number, please try again";
          return false;
        }
       
      )

    }
    else{
      alert("please fillall details properly");
    }
  }

}
