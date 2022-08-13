function function_ves() {
  const first_weight = document.getElementById("enter_weight").value;

  const index_html =
    "In this exercise, I took a weight of <b>" +
    first_weight +
    "</b> kilograms.";

  document.getElementById("result").innerHTML = index_html;
}

document.getElementById("save_result").addEventListener("click", function_ves);
