import assert from 'assert';
import randomGoFuckYourSelfQuotes, { byAuthor } from './index';

describe('randomGoFuckYourSelfQuotes()', function() {
    it('should return a quote by default', function() {
        const quote = randomGoFuckYourSelfQuotes();
        assert(quote.body);
        assert(quote.author);
    });

    it('should return an array of quotes when passed an integer', function() {
        const quotes = randomGoFuckYourSelfQuotes(3);
        assert.equal(quotes.length, 3);

        quotes.forEach(quote => {
            assert(quote.body);
            assert(quote.author);
        });
    });
});

describe('randomGoFuckYourSelfQuotes.byAuthor(author)', function() {
    it('should return array of string quote bodies by given author', function() {
        const quotes = byAuthor('Unknown');
        assert.equal(quotes.constructor, Array);

        quotes.forEach(quote => {
            assert.equal(typeof quote, 'string');
        });
    });
});
