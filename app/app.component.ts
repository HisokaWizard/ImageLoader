import { Component } from '@angular/core';

import { Picture } from './shared/picture';
import { pictureList } from './shared/picture_list';

@Component({
    moduleId: module.id,
    selector: 'main',
    templateUrl : "app.component.html",
    styleUrls: ["../style/bootstrap.css", "../style/style.css"]
})

export class AppComponent {
    
    picture_on_page : number = 0;

    addPicture(picture : Picture){
        let img = document.createElement('img');
        img.src = picture.address;
        return img;
    };

    createPicture(picture : Picture){
        let picList = document.getElementById('image');
        let img = this.addPicture(picture);
        img.width = 270;
        img.height = 270;
        img.style.margin = "10px";
        picList.appendChild(img);
    };

    createNinePicture(){
        if(9 === this.picture_on_page){
            return;
        }
        for(let i = 0; i < 9; i++){
            let picture : Picture = {name : "Not Real Picture", address : "../img/default_avatar.gif"};
            this.createPicture(picture);
            this.picture_on_page++;
        }
    };

} 