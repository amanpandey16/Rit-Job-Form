document.getElementById("jobForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("fullname").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let position = document.getElementById("position").value;

  if(name && email && phone && position) {
    document.getElementById("message").innerText = 
      "Thank you, " + name + "! Your application for " + position + " has been submitted successfully.";
    document.getElementById("jobForm").reset();
  } else {
    document.getElementById("message").innerText = "Please fill all fields!";
    document.getElementById("message").style.color = "red";
  }
});
