window.nptst = {}
nptst.TUMBLR_KEY = "gbcFfKOpchNPrHCVjGVGnf2VicNwgw8uzloYevYfChnDzczgfj"
nptst.TUMBLR_URL = "http://api.tumblr.com/v2/blog/thenepotist.tumblr.com/posts"

nptst.tumblrParsr = {
  fetch: function(){
    self = this
    $.ajax({
      url: nptst.TUMBLR_URL,
      dataType: "jsonp",
      data: {
        api_key: nptst.TUMBLR_KEY,
      },
      success: function(res){
        self.write(res.response.posts)
      }
    })
  },
  write: function(posts){
    $table = $('<table />')
    $target = $('<tr />').appendTo($table)
    $table.appendTo('#tumblr')
    $(posts).each(function(){
      if (this.type == "photo") {
        photo = document.createElement('img')
        photo.src = this.photos[0].alt_sizes[1].url
        $link = $('<a href="' + this.post_url + '" />').append(photo)
        $("<td />").append($link).appendTo($target)
      }
    })
  },
  init: function(){
    if (!!document.getElementById('tumblr')) { this.fetch() }
  }
}

$(document).ready(function(){
  nptst.tumblrParsr.init()
})
