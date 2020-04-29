import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { GlobSerService } from '../glob-ser.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  datadariglob : any;
  constructor(private router: Router, public variabelglobal : GlobSerService ) {
     this.datadariglob = this.variabelglobal.getData();
   }

  ngOnInit() {
  }

}