import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { DialogData } from 'src/app/signup/signup-ceo/signup-ceo-add-popup.component';
import { HeaderComponent } from 'src/app/layout-member/components/header/header.component';


@Component({
  selector: 'app-header-pop-uupp',
  templateUrl: './header-pop-uupp.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ UserService ]
})
export class HPopUUPPComponent implements OnInit {

    constructor(
        private formBuilder: FormBuilder,
        private dialogRef: MatDialogRef < HeaderComponent > ,
        private user: UserService,
        // @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {
        this.saveWasClicked = false;
    }


    imgSrc;

    saveWasClicked;
    img;
    imgForm: FormGroup;

    fileString;

    ngOnInit() {
        this.imgForm = this.formBuilder.group({
            myImg: ['']
        });
    }

    getLS(key) {
        return localStorage.getItem(key);
    }
    uploadImg(e) {
        // if ( event.target.files.length > 0 ) {
        //     const file = event.target.files[0];
        //     this.imgForm.get('myImg').setValue(file);
        // }
        // const file = event.target.files[0];
        // const reader = new FileReader();
        // reader.readAsDataURL(file);
        // reader.onload = (e) => {
        //     this.img = reader.result;
        // };
        // this.img = file;
        // this.img = event.target.files[0];

        const file = e.dataTransfer ? e.dataTansfer.files[0] : e.target.files[0];
        const pattern = /image-*/;
        const reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        reader.onload = this._handle.bind(this);
        reader.readAsDataURL(file);
    }

    _handle(e) {
        const reader = e.target;
        this.imgSrc = reader.result;
        console.log(this.imgSrc);
    }

    saveClicked() {
        console.log(this.imgSrc);
        this.user.updateUserProfilePhoto( this.imgSrc ).subscribe(
            data => {
                this.saveWasClicked = true;
                console.log(data);
            },
            error => {
                console.log('Please select a proper file');
                console.log(error);
            }
        );
    }


}
