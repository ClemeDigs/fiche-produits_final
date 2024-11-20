import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-search-bar",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"],
})
export class SearchBarComponent {
  @Input() search: string = "";
  @Output() searchChange = new EventEmitter<string>();

  onSearchInput(newValue: string) {
    this.searchChange.emit(newValue);
  }
}
