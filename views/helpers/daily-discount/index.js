module.exports = function(app){
  return function() {
    const content = `
    <div class="card-body text-right">
      <h5 class="card-title">
        Graphics, fonts, themes, photos and more, starting at $2!
      </h5>
      <hr class="pt-3">
      <p class="card-text">Get 6 free products and 10% off!</p>
      <a href="#" class="btn btn-sm btn-primary">Continue →</a>
    </div>
    `;
    return content;
  }
};
