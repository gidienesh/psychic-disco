const form = document.querySelector("#form2");
const name = document.querySelector("#name");
const subject = document.querySelector("#subject");
const body = document.querySelector("#body");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const url = "mailto:gidienesh@gmail.com?subject=" + encodeURIComponent(subject.value) + "&body=" + encodeURIComponent("Message from " + name.value + ": " + body.value);
  window.location.href = url;
});
