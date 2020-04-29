import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { GlobSerService } from '../glob-ser.service';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  datadariglob : any;
  datatemp : any;
  namajurusan = '';
  descjurusan = '';
  thisData :any;

  constructor(private router: Router, public variabelglobal : GlobSerService ) { 
    this.datadariglob = this.variabelglobal.getData();
    this.datatemp = this.datadariglob;
  }

  ngOnInit() {
    
  }

  addData()
  {
    this.thisData = {
      jurusan : this.namajurusan,
      desc : this.descjurusan
    }

    this.datatemp.push(this.thisData);
    this.variabelglobal.setData(this.datatemp);
    this.router.navigate(['/list']);
  }

}