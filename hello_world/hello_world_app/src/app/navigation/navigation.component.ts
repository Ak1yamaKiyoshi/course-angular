import { Component, Input } from '@angular/core';

// metadata of components
@Component({
  selector: 'app-navigation',  // html tag to represent this components
  templateUrl: './navigation.component.html', // view
  styleUrls: ['./navigation.component.css'] // styling
})
export class NavigationComponent {
  title = "custom setted title"
  public firstButtonLabel = "first button";
  public secondButtonLabel = "second button";
  public fncallback = () => {
    console.log("button clicked")
  };
  @Input() item = '';
}
