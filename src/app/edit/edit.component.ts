import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { GlobSerService } from '../glob-ser.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  datadariglob : any;
  dataGlobal : any;
  namajurusannew : string;
  descjurusan : string;

  constructor(private router: Router, public variabelglobal : GlobSerService ) { 
    this.datadariglob = this.variabelglobal.getData();
    this.dataGlobal = this.datadariglob;
  }

  ngOnInit() {
  }

  updateData()
  {
    for(let i = 0; i< this.dataGlobal.length; i++)
    {
      if(this.dataGlobal[i].jurusan == this.namajurusan)
      {
        this.dataGlobal[i].jurusan = this.namajurusannew;
        this.dataGlobal[i].desc = this.descjurusan;
      }
    }

    this.variabelglobal.setData(this.dataGlobal);
    this.router.navigate(['/list']);
  }

}