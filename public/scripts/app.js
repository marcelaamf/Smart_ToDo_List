// Client facing scripts here
$(document).ready(function () {
  console.log('Client ready!');

  /* const createItem = function (item) {
    const escapeText = function (str) {
      let div = document.createElement('div');
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    };

    console.log('item', item)
 */











  // Create a new list item when clicking on the "Add" button(new code)
  /* function newElement() {
    const escapeText = function (str) {


      var li = document.createElement("li");

      var t = document.createTextNode(inputValue);
      //return li.innerHTML;

      li.appendChild(t);
      if (inputValue === '') {
        alert("You must write something!");
      } else {
        document.getElementById("myUL").appendChild(li);
      }
      document.getElementById("myInput").value = "";

      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);

      for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
    }
  } */








  //our original code
  /* let $itemMsg =
    `<article class="items-container">
      <header>
      </header>
        <p class="items-texts">${escapeText(item)}</p>
      <footer>
      </footer>
    </article>`
    ;
  console.log('itemMsg', $itemMsg)
  return $itemMsg;
};
*/
//var inputValue = document.getElementById("myInput").value;
  $(".addBtn").on("click", function (event) {
    event.preventDefault();
    const value = $("#myInput").val();
    console.log(value);
    $.ajax({
      method: 'POST',
      url: '/mainpage',
      data: {"title": value},
      success: function (data) {

        $('#myUL').prepend($("<li></li>").text(value));
        $("#myInput").val('');

      },
      error: function (xhr, status, error) {
        console.error('Error:', error);
      }
    });
  })


});


