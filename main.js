function addNew() {
  var ul = document.getElementById("list");
  var taskName = document.getElementById("taskName").value;
  var day = document.getElementById("day").value;
  var minutes = document.getElementById("minutes").value;
  var rating = document.getElementById("rating").value;
  var li = document.createElement("li");

  if (!taskName || taskName.length === 0 || !day || day.length === 0 || !minutes || minutes.length === 0 || !rating || rating.length === 0) {
    alert("Please fill out all data fields");
  } else if (typeof(rating) == "boolean" || isNaN(rating)) {
    alert("Urgency should be a number between 1 and 3.");
  } else if (typeof(rating) != "boolean" && !isNaN(rating)) {
    if (rating < 1 || rating > 3) {
      alert("Urgency should be a number between 1 and 3.");
    } else {
      li.appendChild(document.createTextNode(taskName));
      ul.appendChild(li).setAttribute("data-rating", rating);
    }
  } else {
    alert("Something went wrong");
  }


}

function sort() {
  $('#list li').sort(sort_li).appendTo('#list');

  function sort_li(a, b) {
    return ($(b).data('rating')) < ($(a).data('rating')) ? 1 : -1;
  }

}
