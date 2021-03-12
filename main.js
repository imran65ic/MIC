function mission() {
  let passcode = document.getElementById("passcode").value;
  if (passcode == "0123") {
    location.replace("html/agent110.html");
  } else if (passcode == "1234") {
    location.replace("html/agent120.html");
  } else if (passcode == "2345") {
    location.replace("html/agent130.html");
  } else if (passcode == "3456") {
    location.replace("html/agent140.html");
  }
  else {
    alert("You looks like an anonymous.");
  }
}

function visible() {
  let x = document.getElementById("secret");
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
  } else {
    x.style.visibility = "hidden";
  }
}
function rewardcode(){
    let rewardpass = document.getElementById("secretpass").value;
    if (rewardpass == "5544") {
      alert('Congratilation!! Your mission has been successfull.')
    }
    else{
      alert('You have entered a wrong code. Please enter correctly');
    }
}