import { Component, inject } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  imports: [JsonPipe,RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {
  private httpService: HttpService = inject(HttpService)

  public users: any[] = []


  ngonInit() {
    this.httpService.getUsers().subscribe((data: any) => {
      this.users = data;
      console.log(data);
    })
  }
}

