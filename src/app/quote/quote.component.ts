import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quotes[] = [
    new Quotes ('Annett Mwangi','Jackson Smith', 'Give me coffee to change the things I can and wine to accept those that I cannot.', 0,0,new Date(2020,3,8)),
    new Quotes ('Lucy Wigwa','Biron Johnson' ,'They think they know the rules so that they can break it forgetting that we are the one who wrote it.', 0,0, new Date(2020,2,28)),
    new Quotes('Lilly Baraka','Rawlence Washington', 'Dont dress up so that they can see you,you might endup walking naked just to get their attention.', 0,0, new Date(2020,8,3)),
    
  ];
  
  seeDetails(index: number) {
    this.quotes[index].viewDetails = !this.quotes[index].viewDetails;
  }
  purgeQuotes(isComplete: any, index: number) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this Qoute`);
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  addNewQuotes(luc: Quotes) {
    luc.elapse = new Date(luc.elapse)
    this.quotes.push(luc);
   
  }
  addVote(luc: any, index: number) {
    if (luc) {
      this.quotes[index].upvote+=1;
    }
  }
 lessVote(luc: any,index: number){
  if(luc){
    this.quotes[index].downvote+=1
  }
 }

 initNum!: number;
 finNum!: number;
 counter!: number;

 mostLiked(){
  this.initNum=0
  this.finNum=0
  for (this.counter=0; this.counter < this.quotes.length;this.counter++){
    this.finNum =this.quotes[this.counter].upvote;

    if(this.finNum > this.initNum){
      this.initNum = this.finNum
    }
  }
  return this.initNum

 }
  ngOnInit(): void {
  }

}
