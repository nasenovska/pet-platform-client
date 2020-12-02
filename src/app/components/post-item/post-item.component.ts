import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import {Post} from "../../model/model.post";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostItemComponent implements OnInit {

  @Input() post: Post;
  // @Input() favourite: boolean;
  // @Input() isCurrentUserAdmin: boolean;
  // @Output() courseRemoved = new EventEmitter<number>();
  // @Output() addToFavourites = new EventEmitter<number>();
  // @Output() removeFromFavourites = new EventEmitter<number>();
  // @Output() navigateToViewEvent = new EventEmitter<number>();

  constructor(private router: Router) {
    this.post = {
      title: '',
      description: '',
      datePublished: new Date(),
      imageUrl: ''
    };
  }

  ngOnInit(): void {
  }

  onRemoveClick(): void {
    //this.courseRemoved.emit(this.course.id);
  }

  navigateToView(){
   // this.navigateToViewEvent.emit(this.course.id);
    // this.router.navigate(['/courses/view/', this.course.id]);
  }

  onFavouriteButtonClicked(isFavourite: boolean){
    // if (isFavourite) {
    //   this.addToFavourites.emit(this.course.id);
    // }else {
    //   this.removeFromFavourites.emit(this.course.id);
    // }
  }

}
