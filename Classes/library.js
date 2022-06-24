class catalog {
    constructor() {
        this._media = [];
    }
// Methods
    get media() {
        return this._media;
    }

    addMedia(media) {
        this._media.push(media);
    }
}

// Create MediaList
const myCatalog = new catalog;

class Media {
    constructor(title) {
        
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
        
        myCatalog.addMedia(this);
    }
    // Methods Get and Set
    
    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut
    }

    get ratings() {
        return this._ratings;
    }

    set isCheckedOut(value) {
        this._isCheckedOut = value;
    }

    //  Methods
    
    toggleCheckOutStatus() {
        this.isCheckedOut = !this.isCheckedOut;
    }

    getAverageRating() {
        let ratingsSum = this.ratings.reduce((accumulator, rating) =>
            accumulator + rating)
        return ratingsSum / this.ratings.length;
    }

    addRating(rate) {
        if (rate >= 1 && rate <= 5) {
            this.ratings.push(rate);
        } else {
            console.log('Each rating should be between 1 to 5')
        }
    };
};
// Class Book

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pager = pages;
    }
    get author() {
        return this._author;
    }
    
    get pages() {
        return this._pages;
    }

}



// Class Movie

class Movie extends Media {
    constructor(director, title, runtime) {
        super(title);
        this._director = director;
        this._runtime = runtime;

    }
    get director() {
        return this._director;
    }
    
    get runtime() {
        return this._runtime;
    }

}

// Class CD

class CD extends Media {
    constructor(title, artist, tracks) {
        super(title);
        this._artist = artist;
        this._tracks = tracks;
        this._songTitles = [];

    }

    get artist() {
    return this._artist;
    }

    get tracks() {
        return this._tracks;
    }

    get songTitles() {
        return this._songTitles;
    }

    addSongTitles(songTitle) {
        this._songTitles.push(songTitle);
    }

    shuffle() {
        for (let i = this.songTitles.length - 1; i > 0; i--) {
            let newPos = Math.floor(Math.random() * (i + 1));
            let tempPos = this._songTitles[i];
            // swap elevements
            this._songTitles[i] = this._songTitles[newPos];
            this._songTitles[newPos] = tempPos;
        }
        
        return this._songTitles;
    }

}



// Create a book instance

const history = new Book('Bill Bryson', 'A short history of Nearly Everything', 544)
history.toggleCheckOutStatus();
console.log(history.isCheckedOut);

history.addRating(4)
history.addRating(5)
history.addRating(5)

console.log(history.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);


console.log(speed.getAverageRating());

// cd'S

const myLover = new CD ('My Lover', 'Jennifer Lee', 2);
myLover.addSongTitles('When you were gone');
myLover.addSongTitles('Waiting for you');
myLover.addSongTitles('Love You Forever');

console.log(myLover.tracks);
console.log(myLover.songTitles);
console.log(myLover.shuffle())

//Example for accessing arrays

console.log(myCatalog.media[0]._author)



