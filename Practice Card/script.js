// function timeFormat(monthsOld) {
//   if (monthsOld >= 12) {
//     let years = Math.floor(monthsOld / 12);
//     return years + " " + (years === 1 ? "year ago" : "years ago");
//   } else {
//     return monthsOld + " " + (monthsOld === 1 ? "month ago" : "months ago");
//   }
// }

function createCard(title, views, monthsOld, duration, thumbnail, chName) {
  let viewStr;
  if (views < 1000) {
    viewStr = views;
  } else if (views >= 1000000) {
    viewStr = views / 1000000 + "M";
  } else {
    viewStr = views / 1000 + "k";
  }
  let html = `<div class="container">
        <div class="box">
          <div class="box1">
            <img
              src="${thumbnail}"
              alt="Thumbnail"
            />
            <div class="capsule">${duration}</div>
            <div class="play-button">▶</div>
          </div>
          <div class="text">
            <h1>
              ${title}
            </h1>
            <p>${chName} • ${viewStr} • ${monthsOld}</p>
          </div>
        </div>
      </div>`;
      document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML +html 
}

createCard(
  "JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73",
  180000,
  2,
  "32:13",
  "https://i.ytimg.com/vi/CO_DAXswOrc/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAbDeaG5nlgOfmj0aGOejvuL6680Q",
  "CodeWithHarry",
);
