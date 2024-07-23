const toggleButton = document.getElementById("show-more");
const hiddenCourses = document.querySelectorAll(".hidden-course");
const hiddenDescriptions = document.querySelectorAll(".hidden-description");

toggleButton.addEventListener("click", () => {
  const isHidden =
    hiddenCourses[0].style.display === "none" ||
    hiddenCourses[0].style.display === "";

  hiddenCourses.forEach((course) => {
    course.style.display = isHidden ? "flex" : "none";
  });

  hiddenDescriptions.forEach((description) => {
    description.style.display = isHidden ? "flex" : "none";
  });

  toggleButton.textContent = isHidden ? "Show Less" : "Show More";
});
