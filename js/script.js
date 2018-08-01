console.log("loaded");
$.ajax({
    type: "GET",
    url: "https://api.geonet.org.nz/news/geonet" ,
    dataType: "json" ,
    success:function(data){
      console.log(data.feed);
      for (var i = 0; i < data.feed.length; i++) {
        console.log(data.feed[i].title);
      }
    },
    error:function(error){
      console.log(error);
      console.log("ERROR");
    }
})
