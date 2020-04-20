// --------------collecting all element

const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

//---------------------update selected count

function updateSelectedCount() {
  const selectedSeat = document.querySelectorAll('.row .seat.selected');
  const selectedSeatCount = selectedSeat.length;
  count.innerText = selectedSeatCount;
  total.innerText = selectedSeatCount * ticketPrice;
}

//----------------------movie selected event

movieSelect.addEventListener('change', function (event) {
  ticketPrice = event.target.value;
  updateSelectedCount();
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
