import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Book} from "./model/books.model";
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';


export const books: Book[] = [
   
    { id: '1', name: 'Book 1' , price: 10, quantity: 1, category: "Aventura", img:"img3"},
    { id: '2', name: 'Book 2' , price: 10, quantity: 1, category: "Terror", img:"img4"},
    { id: '3', name: 'Book 3' , price: 10, quantity: 1, category: "Documentario", img:"img5"},
    { id: '4', name: 'Book 4' , price: 10, quantity: 1, category: "Tecnico", img:"img6"},
    { id: '5', name: 'Book 5' , price: 10, quantity: 1, category: "Drama", img:"img7"},
    { id: '6', name: 'Book 6' , price: 10, quantity: 1, category: "Aventura", img:"img8"},

  ];

@Injectable()


export class BooksService {

  private url = 'https://localhost:5001/api/bookstore';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
    
   constructor( private http: HttpClient){}


    // getBooks(){
    //     return books;
    // }

    getBooks() {
      return this.http.get(this.url)

  
    }

}
