import { Component } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  options = [{ id: 0, label: 'Default' }, { id: 1, label: 'Mango-School' }, { id: 2, label: 'Dark' }, { id: 3, label: 'Light' }, { id: 4, label: 'Golden' }];
  chosenValue = 0;
  constructor(private colorService:ColorService) {
    
  }

  trocarCor(newValue: number){
    this.colorService.onChosenValueChange(newValue);
  }

  


}
