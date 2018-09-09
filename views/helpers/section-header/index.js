module.exports = function(app){
  return function(maintext, subtext) {
    const content = `
    <h3 class="py-3 my-3">
      ${maintext}
      <small class="text-primary d-block">${subtext}</small>
    </h3>
    `;
    return content;
  }
};
