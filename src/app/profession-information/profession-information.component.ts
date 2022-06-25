import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Dashboard } from 'app/dashboard/dashboard.model';
import { Profession } from './profession-information.model';

@Component({
  selector: 'app-profession-information',
  templateUrl: './profession-information.component.html',
  styleUrls: ['./profession-information.component.css']
})
export class ProfessionInformationComponent implements OnInit {
  public professionModel: Profession = new Profession;
  public dashboardModel: Dashboard = new Dashboard;

  constructor() { }

  ngOnInit(): void {

  }

}
