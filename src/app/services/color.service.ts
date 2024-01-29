import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor() { 
    let choosedColor = localStorage.getItem('choosedColor');
    if(choosedColor){
      this.onChosenValueChange(parseInt(choosedColor));
    }
  }

  onChosenValueChange(newValue: number) {
    localStorage.setItem('choosedColor',newValue.toString())
    const colorMappings: { [key: number]: { [key: string]: string } } = {
      0: {
        '--background-primary': '#0e0e0e',
        '--background-secundary': '#1e1e1e',
        '--text-primary': '#f3f4f4',
        '--details-primary': '#df072e',
        '--details-secondary': '#FFA500',
        '--details-third': '#008000'
      },

      1: {
        '--background-primary': '#1E409F',
        '--background-secundary': '#1E409F',
        '--text-primary': '#00A859',
        '--details-primary': '#FFD100',
        '--details-secondary': '#FFD100',
        '--details-third': '#FFD100'
      },

      2: {
        '--background-primary': '#0F0F0F',
        '--background-secundary': '#0F0F0F',
        '--text-primary': '#008170',
        '--details-primary': '#005B41',
        '--details-secondary': '#005B41',
        '--details-third': '#005B41'
      },
      3: { 
        '--background-primary': '#92C7CF',
        '--background-secundary': '#92C7CF',
        '--text-primary': '#FBF9F1',
        '--details-primary': '#92C7CF',
        '--details-secondary': '#92C7CF',
        '--details-third': '#92C7CF'
       },
      4: { 
        
        '--background-primary': '#5F0F40',
        '--background-secundary': '#5F0F40',
        '--text-primary': '#FB8B24',
        '--details-primary': '#9A031E',
        '--details-secondary': '#9A031E',
        '--details-third': '#9A031E'
       },
    };

    const colors = colorMappings[newValue];

    Object.keys(colors).forEach(property => {
      document.documentElement.style.setProperty(property, colors[property]);
    });

  }
}
