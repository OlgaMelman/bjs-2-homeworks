class PrintEditionItem {

    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;

    }

    fix() {
        //увеличить state в 1.5 раза
        let increase = this.state *= 1.5;
        if (increase > 100) {
            return increase = this._state;
        } else {
            return increase;
        }


    }

    set state(stateNew) {
        if (stateNew < 0) {
            this._state = 0;
        } else if (stateNew > 100) {
            this._state = 100;
        } else {
            this._state = stateNew;
        }
    }

    get state() {

        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {

    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {

    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
        this.author = author;

    }
}

class FantasticBook extends Book {

    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
        this.author = author;
    }
}

class DetectiveBook extends Book {

    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
        this.author = author;
    }
}

class Library {

    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {

        if (book.state > 30) {
            this.books.push(book);
        }

    }

    findBookBy(type, value) {
        return this.books.find(book => book[type] === value) || null;
    }



    giveBookByName(bookName) {
        // массив книг отфильтровать по имени и 
        const book = this.findBookBy('name', bookName);
        if (book) {
            this.books.splice(this.books.indexOf(book), 1);
        }
        return book;
    }
}

class Student {
    // свойством будет название предмета, а значением свойства — массив оценок по этому предмету
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if (mark < 2 || mark > 5) {
            return;
        } else {
            const nameOfSubject = subject;
            if (this.marks[nameOfSubject]) {
                return this.marks[nameOfSubject].push(mark);
            } else {
                this.marks[nameOfSubject] = [];
                return this.marks[nameOfSubject].push(mark);
            }

        }
    }

    getAverageBySubject(subject) {
        const nameOfSubject = subject;
        for (let key in this.marks) {
            if (!this.marks[nameOfSubject]) {
                return 0;
            } else {
                const averageMarks = this.marks[nameOfSubject].reduce((all, mark) => all + mark) / this.marks[nameOfSubject].length;
                return averageMarks;
            }
        }

    }

    getAverage() {
        const subjects = Object.keys(this.marks);
        if (subjects.length === 0) {
            return 0;
        } else {
            const averageMarksOfSubjects = subjects.reduce((sum, subject) =>  sum + this.getAverageBySubject(subject), 0) / subjects.length.toFixed(1);
            return averageMarksOfSubjects;

        }
    }

}

