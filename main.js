const newQuoteButton = document.querySelector('#js-new-quote');
const spinner = document.querySelector('#js-spinner');
const fbButton = document.querySelector('#js-share')

newQuoteButton.addEventListener('click', getQuote);

// const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

async function getQuote() {
    spinner.classList.remove('hidden');
    newQuoteButton.disabled = true;

    try {
        const response = await fetch(endpoint)
        if (!response.ok) {
            throw Error(response.statusText)
        }

        const json = await response.json();
        displayQuote(json.message);
        // setFbButton(json.message);
    } catch (err) {
        console.log(err)
        alert('Failed to fetch new quote')
    } finally {
        newQuoteButton.disabled = false;
        spinner.classList.add('hidden');
    }
}

function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
}

// function setFbButton(quote) {
//     fbButton.setAttribute('href', `https://facebook.com/share?text=${quote} - Donald Trump`);
// }

getQuote();