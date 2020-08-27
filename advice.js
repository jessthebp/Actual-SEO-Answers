
  var quotes = [
    ["It depends."],
  [  "It was covered in Search Engine Roundtable last week."],
  [  "Google is just evil."],
["Google is uniformly good."],
["You just need more backlinks."],
[ "Keep it in. For accessibility."],
    ["You need to work on your EAT."],
    ["SEO is dead."],
     ["SEO isn't dead."],
     ["It's a pagination problem"], 
     ["This page needs content."],
     ["Read my blogpost about this."],
     ["noindex, nofollow"],
     ["Check the robots.txt!"],
     ["Don't use JavaScript"],
     ["There's a plugin for that. I'm sure it's fine."], 
  ]
  function randomQuote() {
  return quotes [Math.floor(Math.random()*quotes.length)];
}

$('#quoteMachine').click(function() {
  var theQuote = randomQuote();
  $('#quote').text("'" + theQuote);
});

function tweetIt() {
  var phrase = document.getElementById('quote').innerText;
  var tweetUrl = 'https://twitter.com/share?text=' +
    phrase +
    '.' + 'from http://bit.ly/quick-seo-answers';
    window.open(tweetUrl);
}