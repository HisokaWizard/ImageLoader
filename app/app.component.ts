import { Component } from '@angular/core';

import { PictureList } from '../shared/picture';
import { pictureList } from '../shared/picture_list';

@Component({
    moduleId: module.id,
    selector: 'main',
    templateUrl : "app.component.html",
    styleUrls: ["../style/bootstrap.css", "../style/style.css"]
})

export class AppComponent {
    picture_list: PictureList[] = pictureList;

    addPicture(picture){
        let img = document.createElement('img');
        img.src = picture;
        movieList.appendChild(img);
    }

    createPictureList(){
        for()
    }
} 