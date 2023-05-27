class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title + " - " + this.singer;
    }
}


const musicList = [
    new Music("Beni Beni", "Sefo","benibeni.jpg","1.mp3"),    
    new Music("Gaz Pedal", "Lvbel C5","gaz.png","2.mp3"),    
    new Music("David Guetta", "Im Good","good.png","3.mp3")    
];
