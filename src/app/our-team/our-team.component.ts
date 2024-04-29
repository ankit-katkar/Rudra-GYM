import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.scss'
})
export class OurTeamComponent {

}
