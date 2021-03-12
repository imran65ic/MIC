function mission() {
  let passcode = document.getElementById("passcode").value;
  if (passcode == "hejejjd") {
    location.replace("html/agent110.html");
  } else if (passcode == "sar56n") {
    location.replace("html/agent120.html");
  } else if (passcode == "dro69s") {
    location.replace("html/agent130.html");
  } else if (passcode == "hejks") {
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
    if (rewardpass == "126") {
      alert('Congratilation!! Your mission has been successful.')
    }
    else{
      alert('You have entered a wrong code. Please enter correctly');
    }
}
