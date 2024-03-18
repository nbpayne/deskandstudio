// Get recent reviews
$(function() {
  // API URI
  simplybookmeReviewsUrl = '/data/reviews.json';

  // Go get 'em!
  $.getJSON(simplybookmeReviewsUrl, function(response) {
    // Grab element
    var reviewsDiv = $('#reviews');

    // Check we actually got a response
    if (response.models.length) {
      // We did! Let's show the details of the reviews
      for(var model in response.models) {
        var review = response.models[model];
        reviewsDiv.append(
          '<div class="card p-3">' +
          '  <div class="card-body">' +
          '    <h5 class="card-title"><img src="/images/stars/' + review.rate + '.svg" class="stars"> ' + review.subject + '</h5>' +
          '    <p class="card-text">' + review.message + '</p>' +
          '    <p class="card-text"><small class="text-muted" style="cursor: pointer;" title="' + moment(review.feedback_datetime).format('MMMM Do YYYY') + '">' + moment(review.feedback_datetime).fromNow() + '</small></p>' +
          '  </div>' +
          '</div>'
        );
      }
    } else {
      // If no models then show a nice message
      reviewsDiv.after('<p>Nothing</p>');
    }
  });

});


/*
  
*/