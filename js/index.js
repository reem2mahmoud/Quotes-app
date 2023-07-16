var quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    writer: "Oscar Wilde",
    img: "https://malevus.com/wp-content/uploads/2022/09/einstein.jpeg",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    writer: "Albert Einstein",
    img: "https://cdn.dribbble.com/users/2927199/screenshots/5698774/media/6a9b208f78edf25462ec535342ce0cba.jpg?compress=1&resize=400x300&vertical=center",
  },
  {
    quote: "So many books, so little time.",
    writer: "Frank Zappa",
    img: "https://i.scdn.co/image/e1c04d8144371d6a6ac39c7f15a1c2a9f67a0c50",
  },
  {
    quote: "A room without books is like a body without a soul.",
    writer: "Marcus Tullius Cicero",
    img: "https://m.media-amazon.com/images/I/B1cXg0WbZ0S._SX1227_CR0%2C0%2C1227%2C1227_.jpg",
  },
  {
    quote:
      "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.",
    writer: "William W. Purkey",
    img: "https://malevus.com/wp-content/uploads/2022/09/einstein.jpeg",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    writer: "Mae West",
    img: "https://malevus.com/wp-content/uploads/2022/09/einstein.jpeg",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    writer: "Mahatma Gandhi",
    img: "https://malevus.com/wp-content/uploads/2022/09/einstein.jpeg",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    writer: " Robert Frost",
    img: "https://malevus.com/wp-content/uploads/2022/09/einstein.jpeg",
  },
  {
    quote: "A friend is someone who knows all about you and still loves you.",
    writer: "Elbert Hubbard",
    img: "https://malevus.com/wp-content/uploads/2022/09/einstein.jpeg",
  },
  {
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    writer: "Oscar Wilde",
    img: "https://malevus.com/wp-content/uploads/2022/09/einstein.jpeg",
  },
];

var current_random_number;

function createRandomNumber() {
  return Math.floor(Math.random() * 9 + 1);
}

function createQuote() {
  var random_num = createRandomNumber();

  if (current_random_number == random_num) {
    random_num = createRandomNumber();
  }

  document.getElementById("quotes_sentence").innerHTML =
    quotes[random_num].quote;
  document.getElementById("quotes_writer").innerHTML =
    quotes[random_num].writer;
  document.getElementById("writer_image").src = quotes[random_num].img;
  document.getElementById("quotes_details").style.border = "1px solid #ccc";
  current_random_number = random_num;
}
