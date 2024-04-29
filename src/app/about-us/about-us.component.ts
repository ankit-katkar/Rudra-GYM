import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { faDumbbell, faHeartbeat, faAppleWhole, faClipboardList} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [HeaderComponent, FontAwesomeModule, FooterComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  faDumbbell = faDumbbell;
  faAppleWhole = faAppleWhole;
  faClipboardList = faClipboardList
  faHeartbeat = faHeartbeat;
}
