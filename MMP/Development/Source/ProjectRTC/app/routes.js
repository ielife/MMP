module.exports = function(app, streams) {

  // GET home 
  var index = function(req, res) {
    res.render('index', { 
                          title: '流媒体服务端', 
                          header: '实时流媒体测试服务端',
                          footer: '498806069@qq.com',
                          id: req.params.id
                        });
  };

  // GET streams as JSON
  var displayStreams = function(req, res) {
    var streamList = streams.getStreams();
    // JSON exploit to clone streamList.public
    var data = (JSON.parse(JSON.stringify(streamList))); 

    res.json(200, data);
  };

  app.get('/streams', displayStreams);
  app.get('/', index);
  app.get('/:id', index);
}