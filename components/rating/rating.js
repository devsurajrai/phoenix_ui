const ratingStars = document.querySelectorAll(".rating");

const handleRating = (idx, ratingStars) => {
  console.log("Hello");
  // for chnaging the star color to blue to the preceeding stars to the clicked star
  for (let i = 0; i <= idx; i++) {
    if (!ratingStars[i].classList.contains('"rating-star-active"')) {
      ratingStars[i].classList.add("rating-star-active");
    }
  }
  //   for changing the star color to default beyond the clicked star
  for (let i = idx + 1; i < ratingStars.length; i++) {
    ratingStars[i].classList.remove("rating-star-active");
  }
};
ratingStars.forEach((star, idx) => {
  star.addEventListener("click", () => handleRating(idx, ratingStars));
});
