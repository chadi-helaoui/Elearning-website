import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  Nomdutilisateur :string ='';
  motdepasse : string ='';
  

  constructor(private router :Router) { }

  ngOnInit(): void {
  }
  aller1(){
  
    this.router.navigateByUrl('login')
  
  
  }




}
