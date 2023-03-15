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
      url: '/',
      data: $(this).serialize(),
      success: function (data) {
        $('.new-items').prepend(createItem(event.target.toDoItem.value));      },
      error: function (xhr, status, error) {
        console.error('Error:', error);
      }
    });
  })


});


