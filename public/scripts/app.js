// Client facing scripts here
$(document).ready(function () {
  console.log('Client ready!');

  const createItem = function (item) {
    const escapeText = function (str) {
      let div = document.createElement('div');
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    };

    console.log('item', item)




    // Create a new list item when clicking on the "Add" button(new code)
    function newElement(item) {
      console.log(item);
      const escapeText = function (str) {


        var li = document.createElement("li");
        var inputValue = document.getElementById("myInput").value;
        var t = document.createTextNode(inputValue);
        return li.innerHTML;
      }
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








    //our original code
    let $itemMsg =
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


  $(".to-eat-form").on("submit", function (event) {
    event.preventDefault();
    // console.log('food', event.target.toDoItem.value)
    $.ajax({
      method: 'POST',
      url: '/mainpage',
      data: $(this).serialize(),
      success: function (data) {
        $('.new-items').prepend(createItem(event.target.myInput.value));
      },
      error: function (xhr, status, error) {
        console.error('Error:', error);
      }
    });
  })


});


