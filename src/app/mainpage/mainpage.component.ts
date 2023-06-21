import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  customerReviews = [
    {review: "This place is best to when comes for service and right order in right time.", author: "Rajesh Singh Thakuri"},
    {review: "Amazing selection and unbeatable prices!", author: "Sunita Shrestha"},
    {review: "Excellent customer service and high-quality products.", author: "Binod Gurung"},
    {review: "I always find what I need at great prices.", author: "Anjali Tamang"},
    {review: "The staff is friendly and helpful. Highly recommend!", author: "Prakash Khadka"},
    {review: "I've been a loyal customer for years. Consistently impressed with their selection.", author: "Shreya Karki"},
    {review: "A go-to place for Nestle products. The best distributor in town!", author: "Bishal Rai"},
    {review: "Impressive delivery service, got my products right on time.", author: "Renu Shrestha"},
    {review: "An exceptional wholesale distributor with a wide range of products.", author: "Suman Thapa"},
    {review: "Their commitment to quality and service is unmatched.", author: "Saru Paudel"},
    {review: "Efficient, reliable, and always up to the mark.", author: "Aadarsh Adhikari"},
    {review: "A true partner that has contributed to the success of my retail business.", author: "Prajwal Acharya"}
];

currentReviewIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentReviewIndex = (this.currentReviewIndex + 1) % this.customerReviews.length;
    }, 3000); // change the review every 1 second
  }

}
