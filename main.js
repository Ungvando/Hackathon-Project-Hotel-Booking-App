//          VARIABLE
// Data  variable
var days = getColumn("Booking","Days");
var SB1 = getColumn("Booking","SB1");
var SB2 = getColumn("Booking","SB2");
var TB1 = getColumn("Booking","TB1");
var TB2 = getColumn("Booking","TB2");
var DR1 = getColumn("Booking","DR1");
var DR2 = getColumn("Booking","DR2");
var SD1 = getColumn("Booking","SD1");
var SD2 = getColumn("Booking","SD2");
var SR1 = getColumn("Booking","SR1");
var price = getColumn("Booking","Price");

// Login-register
var olduser = ["Mike", "Jack", "Loveu"];
var oldpass = ["154qaz", "qwasd112", "12123e"];
var user;
var pass;
var repass; // for register func

// 
var bookday; // booking day
var roomty; // room type
var people;
var index;
var roomprice; // room price
var checkday; // check day if room avilable
var checkindex;
var viewbooking = false;
var mybookingDay = [];
var mybookingRoom = [];

// Money variable
var money = 0; // current balance
var newmoney; // add balance


//          *****    MAIN CODE   *****
//          IN WELCOME SCREEN
// login button click
onEvent("welcome.login.button","click",function(){
  setScreen("login");
});
// register button click
onEvent("welcome.register.button","click",function(){
  setScreen("register");
});

//          IN LOGIN SCREEN
// login button click
onEvent("login.login.button","click",function(){
  login();
});
// back to welcome page
onEvent("login.back.button","click",function(){
  setScreen("welcome");
});
//          IN REGISTER SCREEN
// register button click
onEvent("register.register.button","click",function(){
  register();
});
// back to welcome page
onEvent("register.back.button","click",function(){
  setScreen("welcome");
});
//          IN HOME SCREEN
// button click set screen to others
onEvent("home.booking.button","click",function(){
  setScreen("booking");
});
onEvent("home.check.button","click",function(){
  setScreen("checkroom");
});
onEvent("home.addmoney.button","click",function(){
  setScreen("addmoney");
});
// button at bottom click set screen
onEvent("home.wallet.button.menu","click",function(){
  setScreen("addmoney");
});
onEvent("home.profile.button.menu","click",function(){
  setScreen("profile");
});
// hover on the menu button at the bottom
onEvent("home.wallet.button.menu","mouseover",function(){
  setProperty("home.wallet.button.menu","icon-color","#FF0000");
});
onEvent("home.wallet.button.menu","mouseout",function(){
  setProperty("home.wallet.button.menu","icon-color","#FFFFFF");
});
onEvent("home.profile.button.menu","mouseover",function(){
  setProperty("home.profile.button.menu","icon-color","#FF0000");
});
onEvent("home.profile.button.menu","mouseout",function(){
  setProperty("home.profile.button.menu","icon-color","#FFFFFF");
});
//            IN BOOKING SCREEN
// check price click
onEvent("booking.price.button","click",function(){
  booking();
});
// check out click
onEvent("booking.pay.button","click",function(){
  booking();
  if(money < roomprice){
    showElement("booking.nomoney.text");
  }
  else{
    hideElement("booking.nomoney.text");
    money -= roomprice;
    setText("addmoney.money.text","$" + money);
    setScreen("payslip");
    viewbooking = true;
    appendItem(mybookingDay,bookday);
    appendItem(mybookingRoom,roomty);
  }
});
// on block check out
onEvent("booking.block.block","click",function(){
  if(bookday == "MM/DD/YYYY" || people == "People" || roomty == "Room Type"){
    showElement("booking.wrong.text");
  }
  else if(money < roomprice){
    showElement("booking.nomoney.text");
  }
});
// bottom menu click
onEvent("booking.home.button.menu","click",function(){
  setScreen("home");
});
onEvent("booking.wallet.button.menu","click",function(){
  setScreen("addmoney");
});
onEvent("booking.profile.button.menu","click",function(){
  setScreen("profile");
});
// hover on the button at the bottom
onEvent("booking.wallet.button.menu","mouseover",function(){
  setProperty("booking.wallet.button.menu","icon-color","#FF0000");
});
onEvent("booking.wallet.button.menu","mouseout",function(){
  setProperty("booking.wallet.button.menu","icon-color","#FFFFFF");
});
onEvent("booking.profile.button.menu","mouseover",function(){
  setProperty("booking.profile.button.menu","icon-color","#FF0000");
});
onEvent("booking.profile.button.menu","mouseout",function(){
  setProperty("booking.profile.button.menu","icon-color","#FFFFFF");
});
onEvent("booking.home.button.menu","mouseover",function(){
  setProperty("booking.home.button.menu","icon-color","#FF0000");
});
onEvent("booking.home.button.menu","mouseout",function(){
  setProperty("booking.home.button.menu","icon-color","#FFFFFF");
});
//              IN PAY SLIP
onEvent("payslip.home.button","click",function(){
  setScreen("home");
  hideElement("booking.people.text");
  hideElement("booking.price.text");
  hideElement("booking.people.logo");
  setProperty("booking.day.button","index",0);
  setProperty("booking.people.button","index",0);
  setProperty("booking.room.button","index",0);
});
//              IN CHECK ROOM SCREEN
//check room when day sellect
onEvent("checkroom.day.button","change",function(){
  checkroom();
});
// bottom menu click
onEvent("checkroom.home.button.menu","click",function(){
  setScreen("home");
});
onEvent("checkroom.wallet.button.menu","click",function(){
  setScreen("addmoney");
});
onEvent("checkroom.profile.button.menu","click",function(){
  setScreen("profile");
});
// hover on the button at the bottom
onEvent("checkroom.wallet.button.menu","mouseover",function(){
  setProperty("checkroom.wallet.button.menu","icon-color","#FF0000");
});
onEvent("checkroom.wallet.button.menu","mouseout",function(){
  setProperty("checkroom.wallet.button.menu","icon-color","#FFFFFF");
});
onEvent("checkroom.profile.button.menu","mouseover",function(){
  setProperty("checkroom.profile.button.menu","icon-color","#FF0000");
});
onEvent("checkroom.profile.button.menu","mouseout",function(){
  setProperty("checkroom.profile.button.menu","icon-color","#FFFFFF");
});
onEvent("checkroom.home.button.menu","mouseover",function(){
  setProperty("checkroom.home.button.menu","icon-color","#FF0000");
});
onEvent("checkroom.home.button.menu","mouseout",function(){
  setProperty("checkroom.home.button.menu","icon-color","#FFFFFF");
});
//                ON ADD MONEY SCREEN
// add button click
onEvent("addmoney.add.button","click",function(){
  addmoney();
});
// bottom menu click
onEvent("addmoney.home.button.menu","click",function(){
  setScreen("home");
});
onEvent("addmoney.profile.button.menu","click",function(){
  setScreen("profile");
});
// hover on the button at the bottom
onEvent("addmoney.profile.button.menu","mouseover",function(){
  setProperty("addmoney.profile.button.menu","icon-color","#FF0000");
});
onEvent("addmoney.profile.button.menu","mouseout",function(){
  setProperty("addmoney.profile.button.menu","icon-color","#FFFFFF");
});
onEvent("addmoney.home.button.menu","mouseover",function(){
  setProperty("addmoney.home.button.menu","icon-color","#FF0000");
});
onEvent("addmoney.home.button.menu","mouseout",function(){
  setProperty("addmoney.home.button.menu","icon-color","#FFFFFF");
});

//                ON PROFILE SCREEN
// view booking click
onEvent("profile.viewbook.button","click",function(){
  if(viewbooking == false){
    setScreen("viewbook-nohave");
  }
  else{
    mybooking();
    setScreen("viewbook-have");
  }
});
// bottom menu click
onEvent("profile.home.button.menu","click",function(){
  setScreen("home");
});
onEvent("profile.wallet.button.menu","click",function(){
  setScreen("addmoney");
});
onEvent("profile.profile.button.menu","click",function(){
  setScreen("profile");
});
// hover on the button at the bottom
onEvent("profile.wallet.button.menu","mouseover",function(){
  setProperty("profile.wallet.button.menu","icon-color","#FF0000");
});
onEvent("profile.wallet.button.menu","mouseout",function(){
  setProperty("profile.wallet.button.menu","icon-color","#FFFFFF");
});
onEvent("profile.home.button.menu","mouseover",function(){
  setProperty("profile.home.button.menu","icon-color","#FF0000");
});
onEvent("profile.home.button.menu","mouseout",function(){
  setProperty("profile.home.button.menu","icon-color","#FFFFFF");
});

//                ON VIEW-BOOKING HAVE
// back home button click
onEvent("viewbook-have.home.button","click",function(){
  setScreen("home");
});
// bottom menu click
onEvent("viewbook-have.home.button.menu","click",function(){
  setScreen("home");
});
onEvent("viewbook-have.wallet.button.menu","click",function(){
  setScreen("addmoney");
});
onEvent("viewbook-have.profile.button.menu","click",function(){
  setScreen("profile");
});
// hover on the button at the bottom
onEvent("viewbook-have.wallet.button.menu","mouseover",function(){
  setProperty("viewbook-have.wallet.button.menu","icon-color","#FF0000");
});
onEvent("viewbook-have.wallet.button.menu","mouseout",function(){
  setProperty("viewbook-have.wallet.button.menu","icon-color","#FFFFFF");
});
onEvent("viewbook-have.profile.button.menu","mouseover",function(){
  setProperty("viewbook-have.profile.button.menu","icon-color","#FF0000");
});
onEvent("viewbook-have.profile.button.menu","mouseout",function(){
  setProperty("viewbook-have.profile.button.menu","icon-color","#FFFFFF");
});
onEvent("viewbook-have.home.button.menu","mouseover",function(){
  setProperty("viewbook-have.home.button.menu","icon-color","#FF0000");
});
onEvent("viewbook-have.home.button.menu","mouseout",function(){
  setProperty("viewbook-have.home.button.menu","icon-color","#FFFFFF");
});

//                ON VIEW-BOOKING NO HAVE
// click to booking
onEvent("viewbook-nohave.book.button","click",function(){
  setScreen("booking");
});
// bottom menu click
onEvent("viewbook-nohave.home.button.menu","click",function(){
  setScreen("home");
});
onEvent("viewbook-nohave.wallet.button.menu","click",function(){
  setScreen("addmoney");
});
onEvent("viewbook-nohave.profile.button.menu","click",function(){
  setScreen("profile");
});
// hover on the button at the bottom
onEvent("viewbook-nohave.wallet.button.menu","mouseover",function(){
  setProperty("viewbook-nohave.wallet.button.menu","icon-color","#FF0000");
});
onEvent("viewbook-nohave.wallet.button.menu","mouseout",function(){
  setProperty("viewbook-nohave.wallet.button.menu","icon-color","#FFFFFF");
});
onEvent("viewbook-nohave.profile.button.menu","mouseover",function(){
  setProperty("viewbook-nohave.profile.button.menu","icon-color","#FF0000");
});
onEvent("viewbook-nohave.profile.button.menu","mouseout",function(){
  setProperty("viewbook-nohave.profile.button.menu","icon-color","#FFFFFF");
});
onEvent("viewbook-nohave.home.button.menu","mouseover",function(){
  setProperty("viewbook-nohave.home.button.menu","icon-color","#FF0000");
});
onEvent("viewbook-nohave.home.button.menu","mouseout",function(){
  setProperty("viewbook-nohave.home.button.menu","icon-color","#FFFFFF");
});

//                          BOOKING check out button and ADD money 

//          FUNCTION
// login function
function login(){
  user = getText("login.user.input");
  pass = getText("login.pass.input");
  for(var i = 0; i < olduser.length+1; i++){
    if(user == olduser[i] && pass == oldpass[i]){
      hideElement("login.wrong.text");
      setText("login.pass.input","");
      setText("login.user.input","");
      setScreen("home");
    }
    else{
      showElement("login.wrong.text");
      setText("login.pass.input","");
      setText("login.user.input","");
    }
  }
}
// register function
function register(){
  user = getText("register.user.input");
  pass = getText("register.pass.input");
  repass = getText("register.repass.input");
  if(user.length != 0 && pass.length != 0 && repass.length != 0){
    if(pass == repass){
      hideElement("register.wrong.text2");
      hideElement("register.wrong.text");
      appendItem(olduser,user);
      appendItem(oldpass,pass);
      setText("login.pass.input","");
      setText("login.user.input","");
      setScreen("login");
    }
    else{
      hideElement("register.wrong.text2");
      showElement("register.wrong.text");
      setText("login.pass.input","");
      setText("login.user.input","");
    }
  }
  else{
    showElement("register.wrong.text2");
  }
}
// Booking func
function booking(){
  bookday = getText("booking.day.button");
  people = getNumber("booking.people.button");
  roomty = getText("booking.room.button");
  index = days.indexOf(bookday);
  if(bookday == "MM/DD/YYYY" || people == "People" || roomty == "Room Type"){
    showElement("booking.wrong.text");
  }
  if(roomty == "Single Bed"){
    if(SB1[index] == "F" && SB2[index] == "F"){
      hideElement("booking.wrong.text");
      hideElement("booking.people.logo");
      hideElement("booking.people.text");
      hideElement("booking.price.text");
      showElement("booking.roomfull.text");
    }
    else{
      roomprice = 0;
      hideElement("booking.wrong.text");
      hideElement("booking.roomfull.text");
      showElement("booking.people.logo");
      setProperty("booking.people.text","text","x" + people);
      setProperty("booking.price.text","text","$" + price[0] * people);
      roomprice = price[0] * people;
      showElement("booking.people.text");
      showElement("booking.price.text");
      hideElement("booking.block.block");
    }
  }
  if(roomty == "Twin Bed"){
    if(TB1[index] == "F" && TB2[index] == "F"){
      hideElement("booking.wrong.text");
      hideElement("booking.people.logo");
      hideElement("booking.people.text");
      hideElement("booking.price.text");
      showElement("booking.roomfull.text");
    }
    else{
      roomprice = 0;
      hideElement("booking.wrong.text");
      hideElement("booking.roomfull.text");
      showElement("booking.people.logo");
      setProperty("booking.people.text","text","x" + people);
      setProperty("booking.price.text","text","$" + price[1] * people);
      roomprice = price[1] * people;
      showElement("booking.people.text");
      showElement("booking.price.text");
      hideElement("booking.block.block");
    }
  }
  if(roomty == "Deluxe Room"){
    if(DR1[index] == "F" && DR2[index] == "F"){
      hideElement("booking.wrong.text");
      hideElement("booking.people.logo");
      hideElement("booking.people.text");
      hideElement("booking.price.text");
      showElement("booking.roomfull.text");
    }
    else{
      roomprice = 0;
      hideElement("booking.wrong.text");
      hideElement("booking.roomfull.text");
      showElement("booking.people.logo");
      setProperty("booking.people.text","text","x" + people);
      setProperty("booking.price.text","text","$" + price[2] * people);
      roomprice = price[2] * people;
      showElement("booking.people.text");
      showElement("booking.price.text");
      hideElement("booking.block.block");
    }
  }
  if(roomty == "Super Deluxe"){
    if(SD1[index] == "F" && SD2[index] == "F"){
      hideElement("booking.wrong.text");
      hideElement("booking.people.logo");
      hideElement("booking.people.text");
      hideElement("booking.price.text");
      showElement("booking.roomfull.text");
    }
    else{
      roomprice = 0;
      hideElement("booking.wrong.text");
      hideElement("booking.roomfull.text");
      showElement("booking.people.logo");
      setProperty("booking.people.text","text","x" + people);
      setProperty("booking.price.text","text","$" + price[3] * people);
      roomprice = price[3] * people;
      showElement("booking.people.text");
      showElement("booking.price.text");
      hideElement("booking.block.block");
    }
  }
  if(roomty == "Superior Room"){
    if(SR1[index] == "F"){
      hideElement("booking.wrong.text");
      hideElement("booking.people.logo");
      hideElement("booking.people.text");
      hideElement("booking.price.text");
      showElement("booking.roomfull.text");
    }
    else{
      roomprice = 0;
      hideElement("booking.wrong.text");
      hideElement("booking.roomfull.text");
      showElement("booking.people.logo");
      setProperty("booking.people.text","text","x" + people);
      setProperty("booking.price.text","text","$" + price[4] * people);
      roomprice = price[4] * people;
      showElement("booking.people.text");
      showElement("booking.price.text");
      hideElement("booking.block.block");
    }
  }
}
// add money function
function addmoney(){
  newmoney = getNumber("addmoney.money.input");
  money += newmoney;
  setText("addmoney.money.text","$" + money);
  setText("addmoney.money.input","");
}
//check room func
function checkroom(){
  checkday = getText("checkroom.day.button");
  checkindex = days.indexOf(checkday);
  if(SB1[checkindex] == "T"){
    showElement("checkroom.SB1.logo");
  }
  else {
    hideElement("checkroom.SB1.logo");
  }
  if(SB2[checkindex] == "T"){
    showElement("checkroom.SB2.logo");
  }
  else{
    hideElement("checkroom.SB2.logo");
  }
  if(TB1[checkindex] == "T"){
    showElement("checkroom.TB1.logo");
  }
  else {
    hideElement("checkroom.TB1.logo");
  }
  if(TB2[checkindex] == "T"){
    showElement("checkroom.TB2.logo");
  }
  else{
    hideElement("checkroom.TB2.logo");
  }
  if(DR1[checkindex] == "T"){
    showElement("checkroom.DR1.logo");
  }
  else {
    hideElement("checkroom.DR1.logo");
  }
  if(DR2[checkindex] == "T"){
    showElement("checkroom.DR2.logo");
  }
  else{
    hideElement("checkroom.DR2.logo");
  }
  if(SD1[checkindex] == "T"){
    showElement("checkroom.SD1.logo");
  }
  else {
    hideElement("checkroom.SD1.logo");
  }
  if(SD2[checkindex] == "T"){
    showElement("checkroom.SD2.logo");
  }
  else{
    hideElement("checkroom.SD2.logo");
  }
  if(SR1[checkindex] == "T"){
    showElement("checkroom.SR1.logo");
  }
  else{
    hideElement("checkroom.SR1.logo");
  }
}
// view booking func
function mybooking(){
  setText("viewbook-have.day.text",mybookingDay[0]);
  setText("viewbook-have.room.text",mybookingRoom[0]);
  if(mybookingDay.length > 1){
    setText("viewbook-have.day.text2",mybookingDay[1]);
    setText("viewbook-have.room.text2",mybookingRoom[1]);
    setProperty("viewbook-have.day.text","font-size",13);
    setProperty("viewbook-have.day.text2","font-size",13);
    showElement("viewbook-have.day.text2");
    showElement("viewbook-have.room.text2");
  }
  showElement("viewbook-have.day.text");
  showElement("viewbook-have.room.text");
}
