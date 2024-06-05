// Get upcoming workshops from meetup
$(function() {
  // API URI
  eventbrite_url = 'https://www.eventbriteapi.com/v3/organizations/266418941811/events/?status=live&token=HS4VPDV6QYZK3J7B5BS3';

  // Go get 'em!
  $.getJSON(eventbrite_url, function(response) {
    // Grab the HTML element we are going to populate
    var nextWorkshopDetail = $('#next-workshop-detail');

    // Check we actually got a response
    if (response.events.length) {
      // We did! Let's show the details of the very next workshop
      var nextWorkshop = response.events[0]; // The next workshop
      var affiliateTag = 'aff=Website'; // Track affiliate link on Eventbrite

      // Display the deets
      nextWorkshopDetail.append(
        '<p>' +
          '<a target="_blank" href="' + nextWorkshop.url + '?' + affiliateTag + '">' +
          '<img src="' + nextWorkshop.logo.original.url + '" ' +
          'alt="' + nextWorkshop.name.text + '" ' +
          'title="' + nextWorkshop.name.text + '" ' +
          'class="img-fluid">' +
          '</a>' +
        '</p>' +
        '<h4 class="mt-0">' + nextWorkshop.name.html + ' ' +
        '<small>' + moment(nextWorkshop.start.local).format('dddd, MMMM Do YYYY') + ' ' + 
          moment(nextWorkshop.start.local).format('h:mmA') + ' - ' + 
          moment(nextWorkshop.end.local).format('h:mmA') + '</small></h4>' +
        '<p>' + nextWorkshop.summary + '</p>' + 
        '<p><a target="_blank" href="' + nextWorkshop.url + '?' + affiliateTag + '">Find out more information and get tickets</a></p>'
      );

      // Now display all the upcoming workshops in the table
      var tbody = $('#workshops tbody');
      for(var event in response.events) {
        var workshop = response.events[event];
        var startDate = moment(workshop.start.local);
        var endDate = moment(workshop.end.local);
        tbody.append(
          '<tr>' +
            '<td>' + 
              startDate.format('dddd, MMMM Do YYYY') + '<br>' +
              startDate.format('h:mmA') + ' - ' + endDate.format('h:mmA') +
            '</td>' +
            '<td>' + 
              '<dl>' +
                '<dt>' + workshop.name.text + '</dt>' +
                '<dd>' +
                  '<a href="' + workshop.url + '?' + affiliateTag + '" target="_blank">Get tickets</a>' +
                '</dd>' +
              '</dl>' +
            '</td>' +
          '</tr>'
        );
      }
    } else {
      // If no events then show a nice message
      nextWorkshopDetail.append(
        '<p class="lead">Fill in the form below and we\'ll let you know when our next workshop is scheduled.</p>' +
        '<p>We\'ll give you advance notice so you can grab a spot before anyone else does. We may even offer a ' +
        'discount.</p>'
      );
    }
  });
});
