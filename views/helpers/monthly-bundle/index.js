
module.exports = function(app){

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  const d = new Date();
  const monthName = monthNames[d.getMonth()];

  return function() {
    const content = `
    <div class="card-body bg-dark">
      <h5 class="card-title">
        ${monthName} Big Bundle
      </h5>
      <hr class="pt-3">
      <p class="card-text">A massive 68 items for only $39</p>
      <a href="#" class="btn btn-primary">See Whats Included →</a>
    </div>
    `;
    return content;
  }
};
