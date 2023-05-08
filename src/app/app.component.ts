import { Component ,AfterViewInit} from '@angular/core';

import { ScriptService } from '@app/services/script.service';
import { ScriptStore } from '@app/services/script.store';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  
  title = 'vk';
  constructor(
 
    public script:ScriptService
  ){
  
  this.script.load(
  
         'bundle'
         )
         .then(data => {
         })
         .catch(error => console.log(error));
  
  
  }
  ngAfterViewInit(): void {}
}
