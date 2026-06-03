import { Component, inject, OnInit, ElementRef, viewChild } from '@angular/core';
import { CursorService } from '@core/services/cursor.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  templateUrl: './custom-cursor.component.html',
  styleUrl: './custom-cursor.component.scss'
})
export class CustomCursorComponent implements OnInit {
  readonly cursorService = inject(CursorService);
  
  showCursor = () => typeof window !== 'undefined' && window.innerWidth > 768;
  
  ngOnInit(): void {
    this.cursorService.init();
  }
  
  getDotTransform(): string {
    return `translate(${this.cursorService.x() - 4}px, ${this.cursorService.y() - 4}px)`;
  }
  
  getFollowerTransform(): string {
    const pos = this.cursorService.getFollowerPosition();
    const size = this.cursorService.isHovering() ? 60 : 40;
    return `translate(${pos.x - size / 2}px, ${pos.y - size / 2}px)`;
  }
}