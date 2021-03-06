/**
 * BooksController
 *
 * @description :: Server-side logic for managing Books
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    books: function(req, res) {
        Books.find({}).exec(function(err, books) {
            if (err) {
                res.send(500, { error: "Database Error" });
            }
            res.view('books', { books: books });
        });
    },

    // This was formerly editbook & still also does work as an edit page if admin user (TODO)

    bookpage: function(req, res) {
        Books.findOne({ id: req.params.id }).exec(function(err, book) {
            if (err) {
                res.send(500, { error: 'Database Error' });
            }

            res.view('bookpage', { book: book });
        });
    },

    comics: function(req, res) {
        Books.find({}).exec(function(err, comics) {
            if (err) {
                res.send(500, { error: "Database Error" });
            }
            res.view('comics', { books: comics });
        });
    },


    listbook: function(req, res) {
        Books.find({}).exec(function(err, books) {
            if (err) {
                res.send(500, { error: "Database Error" });
            }
            res.view('listbook', { books: books });
        });
    },

    addbook: function(req, res) {
        res.view('addbook');
    },

    create: function(req, res) {
        var title = req.body.title;
        var synopsis = req.body.synopsis;
        var year = req.body.year;
        var category = req.body.category;

        Books.create({ title: title, synopsis: synopsis, year: year, category: category }).exec(function(err) {
            if (err) {
                res.send(500, { error: 'Database Error' });
            }

            res.redirect('/books/listbook');
        });
    },

    delete: function(req, res) {
        Books.destroy({ id: req.params.id }).exec(function(err) {
            if (err) {
                res.send(500, { error: 'Database Error' });
            }

            res.redirect('/books/listbook');
        });

        return false;
    },

    update: function(req, res) {
        var title = req.body.title;
        var synopsis = req.body.synopsis;
        var year = req.body.year;
        var category = req.body.category;

        Books.update({ id: req.params.id }, { title: title, synopsis: synopsis, year: year, category: category }).exec(function(err) {
            if (err) {
                res.send(500, { error: 'Database Error' });
            }

            res.redirect('/books/listbook');
        });

        return false;
    }
};