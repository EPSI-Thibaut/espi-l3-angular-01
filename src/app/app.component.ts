import { Component } from '@angular/core';
import { CommonModule, JsonPipe, UpperCasePipe } from '@angular/common';
import { TestPipe } from './pipes/test.pipe';
import { FormsModule } from '@angular/forms';
import { TooltipDirective } from './directives/tooltip.directive';
import { LoginComponent } from '../../src/app/component/login/login.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from "./layout/footer/footer.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [UpperCasePipe, TestPipe, JsonPipe, CommonModule, FormsModule, TooltipDirective, LoginComponent, HeaderComponent, FooterComponent],
})
export class AppComponent {
}