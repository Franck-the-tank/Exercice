var test = "test"
document.write(test)

// Let's build a constructor because we will use a lot of hotel

var Hotel = function(name, rooms, bookings) {
  this.name = name;
  this.rooms = rooms;
  this.bookings = bookings;

  this.getAvailability = function() {
    return this.rooms - this.bookings;
  }
};

var quayHotel = new Hotel('Quay', 10, 5);

document.write(quayHotel.name)
var details1 = quayHotel.name + ' rooms: ';
details1 += quayHotel.getAvailability();
// var elHotel1 = document.getElementById('hotel1');
// elHotel1.textContent =details1;
document.write(details1)

quayHotel.pool = true
document.write(quayHotel.pool)
