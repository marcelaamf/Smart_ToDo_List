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
  return db
    .query(query, values)
    .then((res) => res.rows)
    .catch((err) => {
      console.error("query error", err.stack);
    });
};

$(document).ready(function () {
  console.log("Client ready!");
});

$(".addBtn").on("click", function (event) {
  event.preventDefault();
  handleSearch();
  const value = $("#myInput").val();
});

const handleSearch = function () {
  const term = $("#myInput").val();
  const data = $(this).serialize();
  if (term !== "") {
    $.ajax({
      method: "GET",
      url: `/search?term=${term}&city=vancouver`,
      success: function (data) {
        $.post("/search", { item: data.data, category: 1 }).done(() => {
          $("#myUL-eat").prepend(
            $("<li>").html(`
              ${data.data}
                <div>
                  <button class="editBtn">Edit</button>
                  <button class="deleteBtn">Delete</button>
                </div>
              `)
          );
          $("#myInput").val("");
        });
      },
    });
  }
};

// $(document).ready(function () {
//   $(".deleteBtn").click(function () {
//     const $this = $(this); // store the original context of the click event handler
//     $.ajax({
//         url: '/delete/:id',
//         type: "DELETE",
//         success: function (result) {
//             // handle success response from server
//             $this.closest("li").remove(); // use the stored context to remove the closest "li" element
//         },
//         error: function (xhr, ajaxOptions, thrownError) {
//             // handle error response from server
//             console.log(xhr.status + " " + thrownError);
//         }
//     });
// });
// });
