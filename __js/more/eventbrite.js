// Get upcoming workshops from meetup
$(function() {
  eventbrite_url = 'https://www.eventbriteapi.com/v3/organizations/266418941811/events/?status=live&token=HS4VPDV6QYZK3J7B5BS3';
  $.getJSON(eventbrite_url, function(response) {
    $.getJSON();
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
                '<a href="' + response.events[event].url + '" target="_blank">Get tickets</a>' +
              '</dd>' +
            '</dl>' +
          '</td>' +
        '</tr>'
      );
    }
  });
});
