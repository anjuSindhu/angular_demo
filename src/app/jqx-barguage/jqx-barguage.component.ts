import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jqx-barguage',
  templateUrl: './jqx-barguage.component.html',
  styleUrls: ['./jqx-barguage.component.scss']
})
export class JqxBarguageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tooltip: any =
    {
        visible: true,
        formatFunction: (value: string) => 
        {
            let realVal = parseInt(value);
            return ('Year: 2016<br/>Price Index:' + realVal);
        }
    }
  values: number[] = [52, 115, 130, 137];
}
