var User = function(info){
  this.name = info.name;
  this._id = info._id;
  this.perspective = info.perspective;
};

User.fetch = function(){
  var url = "http://localhost:7812/users";
  var request = $.getJSON(url).then(function(response){
    var users = [];
    for(var i = 0; i < response.length; i++){
      users.push(new User(response[i]));
    }
    return users;
  }).fail(function(response){
    console.log("Users fetch fail.");
  });
  return request;
}
