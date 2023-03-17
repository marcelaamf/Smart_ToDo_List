// Client facing scripts here

/* const addItem = require("../../db/queries/helperFunction.js");
 */

//const db = require('./public/db/connection');



const addItem = function (usersid, item, categoryid) {
  const query = `
		INSERT INTO to_do_lists (user_id, item, category_id)
  	VALUES ($1, $2, $3)
  	RETURNING *;`;
  const values = [usersid, item, categoryid];
  return db.query(query, values)
    .then(res => res.rows)
    .catch(err => {
      console.error('query error', err.stack);
    });
};


$(document).ready(function () {
  console.log('Client ready!');
})









/*$.ajax({
  method: 'POST',
  url: '/mainpage',
  data: { "title": value },
  success: function (data) {

    $('#myUL-eat').prepend($("<li></li>").text(value));
    $("#myInput").val('');
    //addItem(1,value,1);



  },
  error: function (xhr, status, error) {
    console.error('Error:', error);
  }
});*/
$(".addBtn").on("click", function (event) {
  event.preventDefault();

  handleSearch()

  const value = $("#myInput").val();

})





const handleSearch = function () {
  const term = $('#myInput').val()
  const data = $(this).serialize();
  if (term !== '') {
    $.ajax({
      method: 'GET',
      url: `/search?term=${term}&city=vancouver`,
      success: function (data) {
        $.post('/search', { item: data.data, category: 1 })
          .done(() => {
            $("#myUL-eat").prepend(
              $("<li>").html(`
              ${data.data}
                <div>
                  <button class="editBtn">Edit</button>
                  <button class="deleteBtn">Delete</button>
                </div>
              `)
            );
            $("#myInput").val('')
          });
      }
    })
  }
}

/*$(document).on("click", ".delete-btn", function() {
  // get the item ID from the button's "data-id" attribute
  const itemId = $(this).data("id");

  // make an Ajax request to delete the item
  $.ajax({
    url: "/items/" + itemId,
    type: "DELETE",
    success: function(response) {
      // remove the list item from the DOM
      $(this).closest("li").remove();
    },
    error: function(xhr, status, error) {
      console.log("Error deleting item:", error);
    }
  });
});*/


// attach event listener to delete button
/*$(document).on("click", ".deleteBtn", function() {
  const listItem = $(this).closest("li");
  const itemId = listItem.attr("data-id");

  // make AJAX request to delete data from server
  $.ajax({
    url: "/delete/:id",
    type: "DELETE",
    success: function(response) {
      // remove deleted item from the list
      listItem.remove();
    },
    error: function(xhr, status, error) {
      console.log("Error deleting item:", error);
    }
  });
}); */

/*$( "button" ).click(function() {
  $( "p" ).remove();
});*/

/*$(document).on("click", ".deleteBtn", function() {
  const listItem = $(this).closest("li");
  const itemId = listItem.attr("data-id");

  // make AJAX request to delete data from server
  $.ajax({
    url: `/delete/${itemId}`, // Pass the item ID as part of the URL
    type: "DELETE",
    success: function(response) {
      // remove deleted item from the list
      listItem.remove();
    },
    error: function(xhr, status, error) {
      console.log("Error deleting item:", error);
    }
  });
});*/

/*$("button").click(function () {
  $("p").remove();
});*/





/*router.delete("/delete/:id", (req,res) => {
  $(".deleteBtn").on("click", function (event) {
    event.preventDefault();
    const itemId = req.params.id;
 delete(itemId, db) })
    .then((data) => {
      res.send(data);
    })
    .catch(e => {
      console.error(e);
      res.send(e);
    });
});  */




/*$(".deleteBtn").on("click", function(event) {
  event.preventDefault();

  const listItem = $(this).closest("li");
  const itemId = listItem.attr("id");

  // make AJAX request to delete data from server
  $.ajax({
    url: `/items/${itemId}`,
    type: "DELETE",
    success: function(response) {
      // remove deleted item from the list
      listItem.remove();
    },
    error: function(xhr, status, error) {
      console.log("Error deleting item:", error);
    }
  });
}); */


/*router.delete("/", (req, res) => {
  const queryString =
  `UPDATE to_do_lists SET item = $1 WHERE to_do_lists.id = $2 RETURNING *;`;
  const queryParams = [
    Number(req.session.user_id),
    Number(req.params.id)
  ];

console.log('params', queryParams);
db.query(queryString, queryParams)
  .then(data => {
    res.send(data.rows[0]);
  })
  .catch(err => {
    res
      .status(500)
      .json({
        error: err.message
      });
  });
});*/




/*$(document).on("click", ".deleteBtn", function() {
  // get the item ID from the button's "data-id" attribute
  const itemId = $(this).data("id");

  // make an Ajax request to delete the item
  $.ajax({
    url: "/items/" + itemId,
    type: "DELETE",
    success: function(response) {
      // remove the list item from the DOM
      $(this).closest("li").remove();
    },
    error: function(xhr, status, error) {
      console.log("Error deleting item:", error);
    }
  });
}); */

$(document).ready(function () {
  $(".deleteBtn").click(function () {
    var movieTitle = $(this).closest("li").text().trim();
    var url = "/movies/" + encodeURIComponent(movieTitle);
    $.ajax({
      url: url,
      type: "DELETE",
      success: function (result) {
        // handle success response from server
        $(this).closest("li").remove();
      },
      error: function (xhr, ajaxOptions, thrownError) {
        // handle error response from server
        console.log(xhr.status + " " + thrownError);
      }
    });
  });
});


/*$(document).ready(function () {
  $(".deleteBtn").click(function () {
    var $btn = $(this); // Store reference to clicked button
    var movieTitle = $btn.closest("li").text().trim();
    var url = "/movies/" + encodeURIComponent(movieTitle);
    $.ajax({
      url: url,
      type: "DELETE",
      success: function (result) {
        // handle success response from server
        $btn.closest("li").remove(); // Remove the closest li element to the clicked button
      },
      error: function (xhr, ajaxOptions, thrownError) {
        // handle error response from server
        console.log(xhr.status + " " + thrownError);
      }
    });
  });
});

router.delete("/movies/:title", (req, res) => {
  const title = decodeURIComponent(req.params.title);
  // Replace this with the appropriate code to delete the item from the database
  db.collection("movies").deleteOne({ title: title })
    .then(() => {
      res.send("Item deleted successfully");
    })
    .catch(e => {
      console.error(e);
      res.status(500).send("Error deleting item");
    });
});
*/

