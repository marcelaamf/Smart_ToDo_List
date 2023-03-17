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

  loadtable();
})







$(".addBtn").on("click", function (event) {
  event.preventDefault();

  handleSearch()

  const value = $("#myInput").val();

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
})

const handleSearch = function () {
  const term = $('#myInput').val()
  const data = $(this).serialize();
  if (term !== '') {
    $.ajax({
      method: 'GET',
      url: `/search?term=${term}&city=vancouver`,
      success: function (data) {

        console.log('get data', data);
        //render(data);
        $.post('/search', { item: data.data, category: 1 })
          .done(() => {
            $('#myUL-eat').prepend($("<li></li>").text(data.data));
            $("#myInput").val('')
          });
      }
    })
  }

}

const loadtable = function () {
  $.ajax("/", { method: "GET", dataType: "json", })
    .then((newItem) => {
      render(newItem.reverse());
    });
};
