import {Injectable, NgZone} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private firebaseAuth: AngularFireAuth,
              private router: Router,
              private ngZone: NgZone) {
  }

  facebookSignIn() {
    this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    ).then(() => this.ngZone.run(
      () => this.router.navigate(['main'])
    ));
  }

  googleSignIn() {
    this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider
    ).then(() => this.ngZone.run(
      () => this.router.navigate(['main'])
    ));
  }

  emailSignIn(email, password) {
    this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then(() => this.router.navigate(['main']));
  }

  emailSignUp(email, password) {
    this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(() => this.router.navigate(['']));
  }
}
