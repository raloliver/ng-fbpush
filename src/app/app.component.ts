import { Component, OnInit } from '@angular/core';

import { NotificationService } from './shared/notification.service';

@Component({
  selector: 'fbp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ng-fbpush';

  notification;

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    const userId = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    this.notificationService.requestPermission(userId);
    this.notificationService.receiveMessage();
    this.notification = this.notificationService.currentMessage;
  }
}
