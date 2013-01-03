window.nptst = {}
nptst.TUMBLR_KEY = "gbcFfKOpchNPrHCVjGVGnf2VicNwgw8uzloYevYfChnDzczgfj"
nptst.TUMBLR_URL = "http://api.tumblr.com/v2/blog/thenepotist.tumblr.com/posts"

nptst.tumblrParsr = {
  fetch: function(){
    $.ajax({
      url: nptst.TUMBLR_URL,
      dataType: "jsonp",
      data: {
        api_key: nptst.TUMBLR_KEY,
      },
      success: function(res){
        console.log(res.response.posts)
      }
    })
  },
  write: function(){
    //
  },
  init: function(){
    this.fetch()
  }
}

$(document).ready(function(){
  nptst.tumblrParsr.init()
})
