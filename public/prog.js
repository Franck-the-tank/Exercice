// Part one we create a hotel object and write out the offer details


// this is the creation of a hotel object using a an object literal syntax
var hotel = {
  // CAREFUL we don't put "=" in the definition of an object.
  // NOT even for the functions
  name: 'Park',
  roomRate: 240,
  discount: 15,

  offerPrice: function() {
    var offerRate = this.roomRate * ((100 - this.discount) / 100);
    return offerRate;
  }
}

// the getElementById selects an element from the page using the value of its id attribute
// Here we prepare the responsiveness of the html part of the website
// since it will contain the different elements and ids

var hotelName, roomRate, specialRate; //declares the variables

// now we want to take them from where they are in the html code
hotelName = document.getElementById("hotelName");
roomRate = document.getElementById('roomRate');
specialRate = document.getElementById('specialRate');
// name = the element from the page (document) with the id '   '

// Now, use this short cuts to customize the "textContent" inside
// this is the link between the id element and the object created
hotelName.textContent = hotel.name;
roomRate.textContent = '$' + hotel.roomRate.toFixed(2);
// this toFixed(n) function transforms a number into a string with n decimals
specialRate.textContent = '$' + hotel.offerPrice();
