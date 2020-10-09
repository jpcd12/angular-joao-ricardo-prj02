import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  githubJoao

  githubRicardo

  constructor (private github: GithubService) { }

  ngOnInit() {
    this.githubJoao = this.github.getRepositoryJoao();
    this.githubRicardo = this.github.getRepositoryRicardo();
  }

}