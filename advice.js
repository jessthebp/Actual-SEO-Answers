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
     ["There's a plugin for that. Use it. I'm sure it's fine."], 
     ["Content is King"], 
     ["Looks like a lot of spammy backlinks. I suggest disavowing"],
     ["You won't see rankings change for a few weeks. Maybe months.... maybe ever."],
     ["Just create great websites."],
     ["You should start a podcast."], 
     ["Bing???"],
     ["You should try AMP."],
     ["Maybe... get rid of some ads? No? Okay."],
     ["I miss 2003."],
     ["Probably a crawl budget problem."], 
     ["We can automate this."],
     ["Try FAQ schema."],
     ["I should start a podcast."],
     ["Can we add machine learning to the budget?"],
     ["Oh, we can fix this with Python."],
     ["I don't think the analytics is 100% correct, to be honest."],
     ["Google renders JS!"],
     ["Google doesn't render JS very well."],
     ["Just ignore your competitors."],
     ["It's about the internal ranking algorithm."],
     ["Trust me, this will definitely help your PageRank."],
     ["Domain Authority is actually a third party metric."],
     ["I don't actually think the hidden text is helping your website."],
     ["Your only social media is a Google+ account?"]
  ];
  
    function randomQuote() {
  return quotes[Math.floor(Math.random()*quotes.length)];
}


function tweetIt() {
  var phrase = document.getElementById('quote').innerText;
  var tweetUrl = 'https://twitter.com/share?text=' + "'" +
    phrase + "'" + " - from ";
    window.open(tweetUrl);
}


// When we click on the box let's use our friend
document.getElementById('quoteMe').addEventListener('click', function () {
    
    var theQuote = randomQuote();
      var randomized = document.getElementById('quote');
      randomized.innerHTML = "'" + theQuote + "'";

});
