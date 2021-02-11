// Get upcoming workshops from meetup
$(function() {
  eventbrite_url = 'https://www.eventbriteapi.com/v3/organizations/266418941811/events/?status=live&token=HS4VPDV6QYZK3J7B5BS3';
  $.getJSON(eventbrite_url, function(response) {
    var nextWorkshopDetail = $('#next-workshop-detail');
    if (response.events) {
      nextWorkshopDetail.append(
        '<p>' +
          '<a target="_blank" href="' + response.events[0].url + '?aff=Website">' +
          '<img src="' + response.events[0].logo.original.url + '" ' +
          'alt="' + response.events[0].name.text + '" ' +
          'title="' + response.events[0].name.text + '" ' +
          'class="img-fluid">' +
          '</a>' +
        '</p>' +
        '<h4 class="mt-0">' + response.events[0].name.html + ' ' +
        '<small>' + moment(response.events[0].start.local).format('dddd, MMMM Do YYYY') + ' ' + 
          moment(response.events[0].start.local).format('h:mmA') + ' - ' + 
          moment(response.events[0].end.local).format('h:mmA') + '</small></h4>' +
        '<p>' + response.events[0].description.html + '</p>' + 
        '<p><a target="_blank" href="' + response.events[0].url + '?aff=Website">Find out more information and get tickets</a></p>'
      );
      var tbody = $('#workshops tbody');
      for(var event in response.events) {
        var startDate = moment(response.events[event].start.local);
        var endDate = moment(response.events[event].end.local);
        tbody.append(
          '<tr>' +
            '<td>' + 
              startDate.format('dddd, MMMM Do YYYY') + '<br>' +
              startDate.format('h:mmA') + ' - ' + endDate.format('h:mmA') +
            '</td>' +
            '<td>' + 
              '<dl>' +
                '<dt>' + response.events[event].name.text + '</dt>' +
                '<dd>' +
                  '<a href="' + response.events[event].url + '?aff=Website" target="_blank">Get tickets</a>' +
                '</dd>' +
              '</dl>' +
            '</td>' +
          '</tr>'
        );
      }
    } else {
      nextWorkshopDetail.append(
        '<p>Check back later.</p>'
      );
    }
  });
});
