import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newsData: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchNews();
  }

  fetchNews(): void {
    const apiUrl = 'http://localhost:8089/api/news?country=us'; // URL from your Spring Boot API

    this.http.get(apiUrl).subscribe(
      (data: any) => {
        this.newsData = data.articles; // Assuming the API returns articles array
      },
      (error) => {
        console.error('Error fetching news:', error);
      }
    );
  }
}
