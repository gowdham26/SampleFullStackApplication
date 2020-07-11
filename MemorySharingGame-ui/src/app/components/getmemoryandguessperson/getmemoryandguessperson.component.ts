import { Component, OnInit } from '@angular/core';
import {MemorySharingGameService} from '../../services/memory-sharing-game.service';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-getmemoryandguessperson',
  templateUrl: './getmemoryandguessperson.component.html',
  styleUrls: ['./getmemoryandguessperson.component.css']
})
export class GetmemoryandguesspersonComponent implements OnInit {

  shareMemoryForm : FormGroup;
  validMessage: String ="";
  public memoryFormData;
  public memoryId:number;

  constructor(private memorySharingGameService : MemorySharingGameService, private route : ActivatedRoute, private router: Router) {
    this.memoryId=this.route.snapshot.params.id;
   }

  ngOnInit(): void {
    this.getMemory(this.memoryId);
  }

  getMemory(id : number){
    this.memorySharingGameService.getMemoryShared(id).subscribe(
      data=>{
        this.validMessage="Data found";
        this.memoryFormData=data;
        this.shareMemoryForm = new FormGroup({
          textContent : new FormControl(this.memoryFormData.textContent), 
          guessPerson : new FormControl(this.memoryFormData.guessPerson,Validators.required)
        });
      },
      err=>{console.error(err);
        alert("link not valid");
        this.router.navigate(['/']);
      },
      ()=>console.log(this.memoryFormData.memoryText)
    );

  }

  updatePersonWhoSharedMemory(){
   
    if(this.shareMemoryForm.valid){
    this.memorySharingGameService.updateMemorySharedPerson(this.memoryId,this.shareMemoryForm.value).subscribe(
      data=>{
        this.validMessage="";
        alert("Your friend received the name you guessed, lets see whether you guessed him correctly or not");
        this.router.navigate(['/']);
        return true;
      },
      error=>{
        return Observable.throw(error);
      }
    );

  }
  else{
    alert("Please guess your friend");
  }
}

}
