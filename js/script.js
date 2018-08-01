console.log("loaded");
$.ajax({
    type: "GET",
    url: "https://api.geonet.org.nz/news/geonet" ,
    dataType: "json" ,
    success:function(data){

      // var data = google.visualization.arrayToDataTable([
      //      ['PhysicalQuantity', 'Value'],
      //      ['Temperature', data.with[0].content.Temperature],
      //      ['Humidity', data.with[0].content.Humidity]
      //    ]);
      console.log(data.feed);
      for (var i = 0; i < data.feed.length; i++) {
        console.log(data.feed[i]);
      }
    },
    error:function(error){
      console.log(error);
      console.log("ERROR");
    }
})
