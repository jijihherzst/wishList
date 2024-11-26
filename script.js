const wish = document.getElementById('wish');
const addBtn = document.getElementById('add-btn');
const Wishes = document.getElementById('wishes');
const achievedWishes = document.getElementById('achievedWish');

let wishList = ['Kawasaki Ninja', 'Learn javascript'];
let achievedList = [];

function addWish() {
  if (wish.value) {
    wishList.push(wish.value);
  }
  wish.value = '';
  displayAllWish();
}

function achievedWish(event) {
  const wish = event.target.textContent;
  const achievedWishIndex = wishList.indexOf(wish);
  achievedList.push(wish);
  wishList.splice(achievedWishIndex, 1);
  displayAchieved();
  displayAllWish();
}
function displayAchieved() {
  achievedWishes.innerHTML = '';
  achievedList.forEach((wish) => {
    let li = document.createElement('li');
    li.textContent = wish;
    li.setAttribute('class', 'achieved');
    li.addEventListener('click', deleteAchieved);
    achievedWishes.appendChild(li);
  });
}
function displayAllWish() {
  Wishes.innerHTML = '';
  wishList.forEach((wish) => {
    let li = document.createElement('li');
    li.textContent = wish;
    li.addEventListener('click', achievedWish);
    Wishes.appendChild(li);
  });
}
function deleteAchieved(event) {
  achievedList = achievedList.filter(
    (wish) => wish !== event.target.textContent
  );
  displayAchieved();
}
wish.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addWish();
  }
});
addBtn.addEventListener('click', addWish);
window.onload = displayAllWish;
