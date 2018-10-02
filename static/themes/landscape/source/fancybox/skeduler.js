(function generate() {
  console.log("generate");
  var tasks = [];
  var places = ["第一体育館", "第二体育館", "購買前", "企画"]
  var data = [[{
      "timestamp": "12:30",
      "date" : 21,
      "start_time": 10,
      "duration": 2,
      "end_time": 11,
      "place": "第一体育館",
      "name" : "name",
      "from": "brassband",
      "content": "discription1"
    },{
      "timestamp": "13:30",
      "date" : 21,
      "start_time": 14,
      "end_time": "12:00",
      "place": "第一体育館",
      "duration": 1,
      "name" : "name2",
      "from": "けいおん",
      "content": "discription5"
    },{
      "timestamp": "12:30",
      "date" : 21,
      "start_time": 15,
      "duration": 1,
      "end_time": 11,
      "place": "第一体育館",
      "name" : "name",
      "from": "brassband",
      "content": "discription6"
    }],[{
      "timestamp": "13:30",
      "date" : 21,
      "start_time": 11,
      "end_time": "12:00",
      "place": "第二体育館",
      "duration": 1,
      "name" : "name2",
      "from": "けいおん",
      "content": "discription2"
    },{
      "timestamp": "13:30",
      "date" : 21,
      "start_time": 11,
      "end_time": "12:00",
      "place": "第二体育館",
      "duration": 1,
      "name" : "name2",
      "from": "けいおん",
      "content": "discription2"
    },{
      "timestamp": "13:30",
      "date" : 21,
      "start_time": 13,
      "end_time": "12:00",
      "place": "第二体育館",
      "duration": 1,
      "name" : "name2",
      "from": "けいおん",
      "content": "discription2"
    },{
      "timestamp": "13:30",
      "date" : 21,
      "start_time": 14,
      "end_time": "12:00",
      "place": "第二体育館",
      "duration": 2,
      "name" : "name2",
      "from": "けいおん",
      "content": "discription2"
    }],[{
      "timestamp": "12:30",
      "date" : 21,
      "start_time": 16,
      "duration": 1,
      "end_time": 11,
      "place": "購買前",
      "name" : "name",
      "from": "brassband",
      "content": "discription3"
    },{
      "timestamp": "12:30",
      "date" : 21,
      "start_time": 13,
      "duration": 1,
      "end_time": 11,
      "place": "購買前",
      "name" : "name",
      "from": "brassband",
      "content": "discription4"
    },{
      "timestamp": "12:30",
      "date" : 21,
      "start_time": 10,
      "duration": 1,
      "end_time": 11,
      "place": "購買前",
      "name" : "name",
      "from": "brassband",
      "content": "discription3"
    },{
      "timestamp": "12:30",
      "date" : 21,
      "start_time": 17,
      "duration": 1,
      "end_time": 11,
      "place": "購買前",
      "name" : "name",
      "from": "brassband",
      "content": "discription4"
    }],[{
      "timestamp": "12:30",
      "date" : 21,
      "start_time": 12,
      "duration": 1,
      "end_time": 11,
      "place": "企画",
      "name" : "name",
      "from": "brassband",
      "content": "discription3"
    },{
      "timestamp": "12:30",
      "date" : 21,
      "start_time": 13,
      "duration": 1,
      "end_time": 11,
      "place": "企画",
      "name" : "name",
      "from": "brassband",
      "content": "discription4"
    },{
      "timestamp": "12:30",
      "date" : 21,
      "start_time": 9,
      "duration": 1,
      "end_time": 11,
      "place": "企画",
      "name" : "name",
      "from": "brassband",
      "content": "discription3"
    },{
      "timestamp": "12:30",
      "date" : 21,
      "start_time": 17,
      "duration": 1,
      "end_time": 11,
      "place": "企画",
      "name" : "name",
      "from": "brassband",
      "content": "discription4"
    }]]
  for (var i = 0; i < places.length; i++) {
    for (var j = 0; j < data[i].length; j++) {
      startTime=data[i][j].start_time;
      //width 0->100% 0.5->half
      duration=data[i][j].duration;
      var columun= places.findIndex(function(x) { x == data[i][j].place; });

      var columun = places.indexOf(data[i][j].place);
      console.log(data[i][j].place);
      console.log(columun);
      var task = {
        startTime: startTime,
        duration: duration,
        column: columun,
        id: data[i][j].from,
        title: data[i][j].name,
        content: data[i][j].content,
        width: 0
      };
      tasks.push(task);
    }
  }
  //console.log("tasks count: " + tasks.length);
  //console.log(JSON.stringify(tasks));
  jQuery("#skeduler-container").skeduler({
    headers: places,
    tasks: tasks,
    cardTemplate: '<div>${id}</div><div>${title}</div><div class="hide-content">${content}</div>',
    onClick: function (e, t) { console.log(e, t); }
  });
})(jQuery);