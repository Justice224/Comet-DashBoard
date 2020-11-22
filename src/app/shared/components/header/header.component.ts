import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output () toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor() {}
  // tslint:disable-next-line:typedef
  ngOnInit(){}
  toggleSideBar(): void{
    this.toggleSideBarForMe.emit();
  }

}
