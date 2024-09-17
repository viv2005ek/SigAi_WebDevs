document.getElementById('flight-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get form data
    const logo = document.getElementById('logo').value;
    const destination = document.getElementById('destination').value;
    const time = document.getElementById('time').value;
    const businessPrice = document.getElementById('business-price').value;
    const economyPrice = document.getElementById('economy-price').value;

    // Create a new flight card
    const flightCard = document.createElement('div');
    flightCard.className = 'flight-card';

    flightCard.innerHTML = `
      <div class="details">
        <img src="${logo}" alt="Airline Logo">
        <div class="flight-text">
          <h2>${destination}</h2>
          <span>${time}</span>
        </div>
      </div>
      <div class="details">
        <div class="flight-text">
          <h2>${destination}</h2>
          <span>${time}</span>
        </div>
      </div>
      <div class="details">
        <div class="flight-text">
          <span>Business</span>
          <h2>$${parseFloat(businessPrice).toFixed(2)}</h2>
        </div>
      </div>
      <div class="details">
        <div class="flight-text">
          <span>Economy</span>
          <h2>$${parseFloat(economyPrice).toFixed(2)}</h2>
        </div>
      </div>
      <button class="btn f">Book Now</button>
    `;

    // Append the new flight card to the flight list
    document.querySelector('.flight-list').appendChild(flightCard);

    // Clear the form
    document.getElementById('flight-form').reset();
  });


  const containers = document.querySelectorAll(".contain")


  const observor = new IntersectionObserver(entries =>{
    entries.forEach(entry => {
        entry.target.classList.toggle("show",entry.isIntersecting)
          })
  }, 
  {
    threshold: 0.2,
    rootMargin: "-100px",
  })
  
  containers.forEach(container =>{
    observor.observe(container)
  });