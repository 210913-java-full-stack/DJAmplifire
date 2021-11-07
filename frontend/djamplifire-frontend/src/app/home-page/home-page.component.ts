import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../home-page.service';
import { SpotifyAuthService } from '../spotify-auth.service';
import { ActivatedRoute } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,

} from '@angular/animations';


@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  providers: [SpotifyAuthService],
  styleUrls: ['./home-page.component.css'],
  animations: [
    trigger('slideIn', [

      state('close', style({
        transform: 'translateY(0%)',
        color: 'purple'
      })),

      transition('void => close', [
        style({
          // marginRight: '800px'
          transform: 'translateY(50%)',
          color: 'yellow'

        }),
        animate('1000ms')
      ]),


    ]),
  ]
})
export class HomePageComponent implements OnInit {

  test = true;

  access_token!: string;
  token_type!: string;
  expires_in!: number;
  constructor(private route: ActivatedRoute, private spotifyService: SpotifyAuthService) { }

  ngOnInit(): void {
    this.route.fragment
      .subscribe(params => {
        console.log(params)
        // if (params !== null) {
        //   this.access_token = params.access_token
        //   this.token_type = params.token_type
        //   this.expires_in = params.expires_in
        // }

      })



  }

  loginSpotify(): void {
    alert("logging in")
    this.spotifyService.getTokens()
  }

}
