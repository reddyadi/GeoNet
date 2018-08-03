console.log("loaded");
$.ajax({
    type: "GET",
    url: "https://api.geonet.org.nz/news/geonet" ,
    dataType: "json" ,
    success:function(data){

      console.log(data.feed);
      var tb = document.getElementById('disp');
      for (var i = 0; i < data.feed.length; i++) {
          var tr = document.createElement('tr');
          var th1 = document.createElement('th');
          var th2 = document.createElement('th');
          var th3 = document.createElement('th');
          var text = document.createTextNode(data.feed[i].title);
          var text1 = document.createTextNode(data.feed[i].link);
          var text2 = document.createTextNode(data.feed[i].published);
          th1.appendChild(text);
          th2.appendChild(text1);
          th3.appendChild(text2);
          tr.appendChild(th1);
          tr.appendChild(th2);
          tr.appendChild(th3);
          tb.appendChild(tr);
      }
    },
    error:function(error){
      console.log(error);
      console.log("ERROR");
    }
})
