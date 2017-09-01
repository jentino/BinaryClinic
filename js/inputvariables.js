var tockSeconds;
var tockMinutes;
var temp_minute = "";
var globalMinutes;
var rescue 	= 0;
var tradeamount = [0.35,0.72,1.49,3.08,6.35,13.11,27.05,55.82];
var Intervals = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59];

var tradeProfit = 0;
var tradeLoss = 0;
var countbuys = 0;
var countsells = 0;
var countlosses = 0;
var countwins = 0;
var totalwins = 0;

var connectLock = "OnOn";
var winlossLock = "Off";
var tradeDirection = "RED";

var signalCandle;
var appid;
var output;
var outputemail;
var assetvalue = "";
var OriginalBalance = 0;
var trader_name = "";

