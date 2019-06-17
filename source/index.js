import uniqueRandomArray from 'unique-random-array';
import quotes from './quotes.json';

const getRandomGoFuckYourselfQuote = uniqueRandomArray(quotes);

export default function randomGoFuckYourSelfQuotes(count=1) {
    if (count === 1) {
        return getRandomGoFuckYourselfQuote();
    }

    const quotesArray = [];
    for (let i = 0; i < count; i++) {
        quotesArray.push(getRandomGoFuckYourselfQuote());
    }
    return quotesArray;
}

export function byAuthor(author) {
    return quotes
        .filter(quote => quote.author === author)
        .map(quote => quote.body);
}
