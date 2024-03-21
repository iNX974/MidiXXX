function RetrieveProfile()
{
  //var profiles = GetDb("profiles");
  var profiles;
  if(!profiles)
  {
    AppProfiles.Profiles = GetDefaultProfiles();
  }
  else
  {
    AppProfiles = profiles;
  }
  var p = AppProfiles.Profiles.filter(function(e) {return e.active == true;})[0];
  if(p)
  {
    AppData = p;
  }
  else
  {
    AppData = AppProfiles.Profiles[0];
  }

}
//////////////////////////////////////////////////////////////////////////////////////////////////
//Base de donnée
// ouverture de la base de données
function SaveDb(id, obj) {
  var json = JSON.stringify(obj);
  window.localStorage.setItem(id, json);
  
  }
  function GetDb(id) {
    var json = localStorage.getItem(id);
    if(json)
      return JSON.parse(json);
    return null;
    
  }