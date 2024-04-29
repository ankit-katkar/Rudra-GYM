import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { faHeartbeat, faDumbbell, faClipboardList, faAppleWhole} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FontAwesomeModule, RouterOutlet, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  faHeartbeat = faHeartbeat;
  faAppleWhole = faAppleWhole;
  faClipboardList = faClipboardList
  faDumbbell = faDumbbell;
}
