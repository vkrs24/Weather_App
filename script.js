const search_btn = document.querySelector(".horizontal_content_2");

search_btn.addEventListener("click", () => {
  let cityname = document.querySelector(".input_text"); // Retrieve value inside the event listener
  cityname.value = "";
});
