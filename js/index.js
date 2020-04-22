// --------------collecting all element

const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
populateUi();

let ticketPrice = +movieSelect.value;

//---------------------update selected count

function updateSelectedCount() {
  const selectedSeat = document.querySelectorAll('.row .seat.selected');

  const seatIndex = [...selectedSeat].map(function (seat) {
    return [...seats].indexOf(seat);
  });
  localStorage.setItem('selectedSeats', JSON.stringify(seatIndex));


  const selectedSeatCount = selectedSeat.length;
  count.innerText = selectedSeatCount;
  total.innerText = selectedSeatCount * ticketPrice;


}

//----------------------movie selected event

movieSelect.addEventListener('change', function (event) {
  ticketPrice = event.target.value;
  updateSelectedCount();

  function movieData(selectedIndex, price) {
    localStorage.setItem('movieName', selectedIndex);
    localStorage.setItem('moviePrice', price);
  }
  movieData(event.target.selectedIndex, event.target.value);

});

// ---------------------adding event listener

container.addEventListener('click', function (event) {
  if (
    event.target.classList.contains('seat') &&
    !event.target.classList.contains('occupied')
  ) {
    event.target.classList.toggle('selected');
    updateSelectedCount();
  }
});
// --------------get data from localstorage and populate UI
function populateUi() {
  const selectedSeatsFromLocalS = JSON.parse(localStorage.getItem('selectedSeats'));
  if (selectedSeatsFromLocalS !== null && selectedSeatsFromLocalS.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeatsFromLocalS.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const movieNameFromLocalS = localStorage.getItem('movieName');
  if (movieNameFromLocalS !== null && movieNameFromLocalS > 0) {
    movieSelect.selectedIndex = movieNameFromLocalS;
  }
  const moviePriceFromLocalS = localStorage.getItem('moviePrice');
}
//------------initialized count and total 
updateSelectedCount();