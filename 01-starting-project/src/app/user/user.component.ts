import { Component, computed, input, Output, EventEmitter, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  id = input.required<string>();
  avatar = input.required<string>();
  name = input.required<string>();

  select = output<string>();

  imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  })

  onSelectUser() {
    this.select.emit(this.id());
   }
}
