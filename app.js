let newQuote = document.querySelector('.quote');
let person = document.querySelector('.person');
let btn = document.querySelector('.new-quote');

const quotes = [
  {
    quote: `"Don't bend; don't water it down; don't try to make it logical; don't edit your own soul 
    according to the fashion. Rather, follow your most intense obsessions mercilessly."`,

    person: `Franz Kafka`
  },

  {
    quote: `"We are what we repeatedly do. Excellence, then, is not an act, but a habit."`,

    person: `Aristotle`

  },

  {
    quote: `"How wonderful it is that nobody need wait a single moment before starting to improve the world."`,

    person: `Anne Frank`

  },

  {
    quote: `"The most common way people give up their power is by thinking they don't have any."`,

    person: `Alice Walker`

  },

  {
    quote: `"I hope that in this year to come, you make mistakes. Because if you are making mistakes, 
    then you are making new things, trying new things, learning, living, pushing yourself, changing yourself, 
    changing your world. You're doing things you've never done before, and more importantly, you're doing something."`,

    person: `Mark Twain`

  },

  {
    quote: `"Keep away from people who try to belittle your ambitions. Small people always do that, 
    but the really great make you feel that you, too, can become great."`,

    person: `Neil Gaiman`

  },

  {
    quote: `"Pain is inevitable. Suffering is optional."`,

    person: `Haruki Murakami`

  },

  {
    quote: `"Be kind, for everyone you meet is fighting a hard battle."`,

    person: `Plato`

  },

  {
    quote: `"All the world's a stage, and all the men and women merely players."`,

    person: `William Shakespeare`

  },

  {
    quote: `"Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well."`,

    person: `Voltaire`

  },
];

btn.addEventListener ('click', function () {
   let random = Math.floor(Math.random() * quotes.length);

   newQuote.innerText = quotes[random].quote;
   person.innerText = quotes[random].person;

  })

