const filterButtons = document.querySelectorAll(".filter-buttons a");
const images = document.querySelector(".images");
const buttons = document.querySelectorAll(".filter-buttons a");


const removeActive = () => {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    removeActive();
    button.classList.add("active");
  });
});

let data = [
  {
    files: [
      { link: "./images/bts1.jpeg" },
      { link: "./images/bts2.jpeg" },
      { link: "./images/bts3.jpeg" },
      { link: "./images/bts4.jpeg" },
      { link: "./images/bts5.jpeg" },
      { link: "./images/bts6.jpeg" },
      { link: "./images/bts7.jpeg" },
      { link: "./images/bts8.jpeg" },
    ],
    class: "bts",
  },
  {
    files: [
      { link: "./images/mdl1.jpeg" },
      { link: "./images/mdl2.jpeg" },
      { link: "./images/mdl3.jpeg" },
      { link: "./images/mdl4.jpeg" },
      { link: "./images/mdl5.jpeg" },
      { link: "./images/mdl6.jpeg" },
      { link: "./images/mdl7.jpeg" },
      { link: "./images/mdl8.jpeg" },
    ],
    class: "model",
  },

  {
    files: [
      { link: "./images/ksr1.jpeg" },
      { link: "./images/ksr2.jpeg" },
      { link: "./images/ksr3.jpeg" },
      { link: "./images/ksr4.jpeg" },
      { link: "./images/ksr5.jpeg" },
      { link: "./images/ksr6.jpeg" },
      { link: "./images/ksr7.jpeg" },
      { link: "./images/ksr8.jpeg" },
    ],
    class: "konser",
  },

  {
    files: [
      { link: "./images/lks1.jpeg" },
      { link: "./images/lks2.jpeg" },
      { link: "./images/lks3.jpeg" },
      { link: "./images/lks4.jpeg" },
      { link: "./images/lks5.jpeg" },
      { link: "./images/lks6.jpeg" },
      { link: "./images/lks7.jpeg" },
      { link: "./images/lks8.jpeg" },
    ],
    class: "art",
  },
];


const shuffle = (array) => {
  let currentIndex = array.length;
  let randomIndex;
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex); 
    currentIndex--;
    const temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
};


const createLiTag = (image, className) => {
  let liTag = document.createElement("li");
  liTag.classList.add(className);
  liTag.innerHTML = `<img src="${image}" />`;
  return liTag;
};

const generate = (filterString) => {
  let allImages = [];
  let allClasses = [];
  images.innerHTML = "";
  if (filterString === "all") {
    data.forEach((obj) => {
      obj.files.forEach((file) => {
        allImages.push(file);
      });
      allClasses.push(obj.class);
    });
    allImages = shuffle(allImages);
    allImages.forEach((file, index) =>
      images.appendChild(createLiTag(file.link, allClasses[index]))
    );
  } else {
    
    data.forEach((obj) => {
      obj.files = shuffle(obj.files);
      obj.files.forEach((file) =>
        images.appendChild(createLiTag(file.link, obj.class))
      );
    });
  }
};

const filter = (filterString) => {
  generate(filterString);
  let imageCards = document.querySelectorAll(".images li");
  imageCards.forEach((image) => {
    if (image.classList.contains(filterString) || filterString === "all") {
      image.classList.add("show");
    } else {
      image.classList.remove("show");
    }
  });
};

filter("all");

console.log(
  images.childNodes.forEach((v, i) => {
    console.log(v);
    if (i == 2) {
      v.childNodes[0].classList.add("big");
    }
  })
);