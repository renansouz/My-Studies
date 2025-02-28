import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  inputValue: string = ''
  students = [
    { id: 1, name: "Alice Johnson", email: "alice.johnson@example.com", favoriteColor: "Blue", photo: "https://picsum.photos/200/300?random=1" },
    { id: 2, name: "Bob Smith", email: "bob.smith@example.com", favoriteColor: "Green", photo: "https://picsum.photos/200/300?random=2" },
    { id: 3, name: "Charlie Brown", email: "charlie.brown@example.com", favoriteColor: "Red", photo: "https://picsum.photos/200/300?random=3" },
    { id: 4, name: "David White", email: "david.white@example.com", favoriteColor: "Yellow", photo: "https://picsum.photos/200/300?random=4" },
    { id: 5, name: "Emma Wilson", email: "emma.wilson@example.com", favoriteColor: "Purple", photo: "https://picsum.photos/200/300?random=5" },
    { id: 6, name: "Frank Thomas", email: "frank.thomas@example.com", favoriteColor: "Orange", photo: "https://picsum.photos/200/300?random=6" },
    { id: 7, name: "Grace Hall", email: "grace.hall@example.com", favoriteColor: "Pink", photo: "https://picsum.photos/200/300?random=7" },
    { id: 8, name: "Henry Adams", email: "henry.adams@example.com", favoriteColor: "Cyan", photo: "https://picsum.photos/200/300?random=8" },
    { id: 9, name: "Isla Nelson", email: "isla.nelson@example.com", favoriteColor: "Magenta", photo: "https://picsum.photos/200/300?random=9" },
    { id: 10, name: "Jack Carter", email: "jack.carter@example.com", favoriteColor: "Lime", photo: "https://picsum.photos/200/300?random=10" },
    { id: 11, name: "Kelly Roberts", email: "kelly.roberts@example.com", favoriteColor: "Teal", photo: "https://picsum.photos/200/300?random=11" },
    { id: 12, name: "Liam Wright", email: "liam.wright@example.com", favoriteColor: "Azure", photo: "https://picsum.photos/200/300?random=12" },
    { id: 13, name: "Mia King", email: "mia.king@example.com", favoriteColor: "Maroon", photo: "https://picsum.photos/200/300?random=13" },
    { id: 14, name: "Noah Scott", email: "noah.scott@example.com", favoriteColor: "Gold", photo: "https://picsum.photos/200/300?random=14" },
    { id: 15, name: "Olivia Green", email: "olivia.green@example.com", favoriteColor: "Silver", photo: "https://picsum.photos/200/300?random=15" },
    { id: 16, name: "Paul Baker", email: "paul.baker@example.com", favoriteColor: "Bronze", photo: "https://picsum.photos/200/300?random=16" },
    { id: 17, name: "Quinn Harris", email: "quinn.harris@example.com", favoriteColor: "Indigo", photo: "https://picsum.photos/200/300?random=17" },
    { id: 18, name: "Ryan Phillips", email: "ryan.phillips@example.com", favoriteColor: "Violet", photo: "https://picsum.photos/200/300?random=18" },
    { id: 19, name: "Sophia Evans", email: "sophia.evans@example.com", favoriteColor: "Turquoise", photo: "https://picsum.photos/200/300?random=19" },
    { id: 20, name: "Tyler Walker", email: "tyler.walker@example.com", favoriteColor: "Crimson", photo: "https://picsum.photos/200/300?random=20" }
  ];
}  
