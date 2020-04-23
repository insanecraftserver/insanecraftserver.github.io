function getPlayersOnServer(){


  //Server IP you with to gather information on
  var IP = "insanecraft.virtus.host";
  //The name of the google sheet that you would like for the script to run on
  //default sheet name is Sheet1 I believe
  var SHEETNAME = "Sheet1";

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var cond_sheet = ss.getSheetByName(SHEETNAME);
  var cond_lastRow = cond_sheet.getLastRow();
  var url = "https://api.mcsrvstat.us/1/" + IP;
  var response = UrlFetchApp.fetch(url);
  var dataAll = JSON.parse(response.getContentText());
  var date = Utilities.formatDate(new Date(), "GMT", "MM-dd-yyyy HH:mm:ss");
  var dt_c = "A";//column for date and time of data gathered
  var np_c = "B";//column for number of players
  var pn_c = "C";//column for player names
  cond_sheet.getRange("A1:C").copyTo(cond_sheet.getRange("A2"));
  cond_sheet.getRange(dt_c+1).setValue(date);
  cond_sheet.getRange(np_c+1).setValue(dataAll.players.online);
  player_list = "";
  if(dataAll.players.list){
    for(i = 0;i < dataAll.players.list.length;i++){
      player_list = dataAll.players.list[i] + "," + player_list;
    }
    cond_sheet.getRange(pn_c+1).setValue(player_list);
  }else{
    cond_sheet.getRange(pn_c+1).setValue("null");
  }
}

function condenseDailyData(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var cond_sheet = ss.getSheetByName('recent_players_condenced');
  for(i = 0; i < 24;i++){
    var highest_hougly_playercount = 0;
    for(f = 0;f < 60;f++){
      var vert_var = (60 * i) + f + 1;
      if(cond_sheet.getRange("B"+vert_var).getValue() > highest_hougly_playercount){
        highest_hougly_playercount = cond_sheet.getRange("B"+vert_var).getValue();
      }
    }
    var hour_modef = i + 1;
    cond_sheet.getRange("D"+hour_modef).setValue(highest_hougly_playercount)
  }
}
