// клас для Кімнат, куди включено ім'я, лінк на фото (заміна зобр. з камери), масив об'єктів Пристроїв
// та функції додавання нової кімнати у масив Кімнат та потрібного об'єкту Приладу.

class Room {
  constructor(name, link, devices = []) {
    this.name = name;
    this.link = link;
    this.devices = devices;
  }
  addDevice(device) {
    this.devices.push(device);
  }
  addRoom() {
    rooms.push(this);
    // localStorage.setItem("savedRooms", JSON.stringify(rooms));
    // updateLocalStorage();
    // location.reload();
  }

  addLights() {
    let newLight = new Device(
      "LedLights",
      "connected",
      "on",
      10,
      "SOFT LIGHT",
      undefined,
      undefined,
      undefined,
      undefined,
      undefined
    );
    this.addDevice(newLight);
  }

  addConditioner() {
    let newConditioner = new Device(
      "Conditioner",
      "connected",
      "on",
      15,
      undefined,
      undefined,
      undefined,
      18,
      "Medium",
      undefined
    );
    this.addDevice(newConditioner);
  }

  addTV() {
    let newTV = new Device(
      "SmartTV",
      "connected",
      "off",
      5,
      undefined,
      10,
      69,
      undefined,
      undefined,
      undefined
    );
    this.addDevice(newTV);
  }

  addBlinds() {
    let newBlinds = new Device(
      "Blinds",
      "connected",
      "off",
      15,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      "EVENING"
    );
    this.addDevice(newBlinds);
  }
}

// клас для Пристроїв, куди включено ім'я, статус, та параметри всіх доступних налаштувань

class Device {
  constructor(
    name,
    status,
    power,
    delay,
    color, // значення по замовч. при створенні: lightType = 'DAY LIGHT',
    volume,
    channel,
    temperature,
    blowpower, // значення по замовч. при створенні: temperature = 25,
    brightness
  ) {
    (this.name = name),
      (this.status = status),
      (this.power = power),
      (this.delay = delay),
      (this.color = color),
      (this.volume = volume),
      (this.channel = channel),
      (this.temperature = temperature),
      (this.blowpower = blowpower),
      (this.brightness = brightness);
  }
}

// Створюємо масив об'єктів Кімнат для демонтрації функціоналу
const rooms = [
  {
    name: "Livingroom",
    link: "img/livingroom.jpg",
    devices: [
      {
        name: "LedLights",
        status: "connected",
        power: "on",
        color: "SOFT LIGHT",
        delay: 10,
      },
      {
        name: "SmartTV",
        status: "disconnected",
        power: "off",
        volume: 24,
        channel: 69,
        delay: 50,
      },
      {
        name: "Conditioner",
        status: "connected",
        power: "on",
        blowpower: "Medium",
        temperature: 16,
        delay: 25,
      },
      {
        name: "Blinds",
        status: "disconnected",
        power: "off",
        brightness: "NIGHT",
        delay: 62,
      },
    ],
  },
  {
    name: "Kitchen",
    link: "img/kitchen.jpg",
    devices: [
      {
        name: "LedLights",
        status: "connected",
        power: "on",
        color: "DAY LIGHT",
        delay: 26,
      },
      {
        name: "SmartTV",
        status: "connected",
        power: "on",
        volume: 16,
        channel: 10,
        delay: 46,
      },
      {
        name: "Conditioner",
        status: "disconnected",
        power: "off",
        blowpower: "Low",
        temperature: 14,
        delay: 34,
      },
      {
        name: "Blinds",
        status: "connected",
        power: "on",
        brightness: "DAY",
        delay: 14,
      },
    ],
  },
  {
    name: "Bedroom",
    link: "img/bedroom.jpg",
    devices: [
      {
        name: "LedLights",
        status: "connected",
        power: "on",
        color: "COLD LIGHT",
        delay: 63,
      },
      {
        name: "SmartTV",
        status: "connected",
        power: "on",
        volume: 11,
        channel: 69,
        delay: 63,
      },
      {
        name: "Conditioner",
        status: "disconnected",
        power: "off",
        blowpower: "Strong",
        temperature: 22,
        delay: 8,
      },
      {
        name: "Blinds",
        status: "disconnected",
        power: "off",
        brightness: "EVENING",
        delay: 23,
      },
    ],
  },
  {
    name: "Bathroom",
    link: "img/bathroom.jpg",
    devices: [
      {
        name: "LedLights",
        status: "connected",
        power: "on",
        color: "SOFT LIGHT",
        delay: 4,
      },
      {
        name: "SmartTV",
        status: "disconnected",
        power: "off",
        volume: 8,
        channel: 32,
        delay: 15,
      },
      {
        name: "Conditioner",
        status: "connected",
        power: "on",
        blowpower: "Low",
        temperature: 17,
        delay: 32,
      },
      {
        name: "Blinds",
        status: "connected",
        power: "on",
        brightness: "EVENING",
        delay: 9,
      },
    ],
  },
];

console.log(rooms); // перевірка

// змінна з назвою вибраної кімнати та її індекс у масиві Кімнат
let currentRoom = rooms[0].name;
let currentRoomIndex = rooms.findIndex((room) => room.name === currentRoom);

// Функції отримання налаштувань приладів з масиву кімнат та встановлення їх значень у інтерфейсі
function getTVSettings(index) {
  const { name, status, power, volume, channel, delay } = rooms[
    index
  ].devices.find((device) => device.name === "SmartTV");
  SmartTVStatus = status;
  SmartTVPower = power;
  SmartTVVolume = volume;
  SmartTVChannel = channel;
  SmartTVDelay = delay;
  document.querySelector(".volumeValue").textContent = SmartTVVolume;
  document.querySelector(".volumeRange").value = SmartTVVolume;
  document.querySelector(".channelInput").value = SmartTVChannel;
  document.querySelector(".SmartTV-off-delay").placeholder = SmartTVDelay;
}

function getLightSettings(index) {
  document
    .querySelectorAll('.LedLights-set-radiobuttons input[type="radio"]')
    .forEach((radiobutton) => (radiobutton.checked = false));
  const { name, status, power, color, delay } = rooms[index].devices.find(
    (device) => device.name === "LedLights"
  );
  LedLightsStatus = status;
  LedLightsPower = power;
  LedLightsColor = color;
  LedLightsDelay = delay;
  document.querySelector('input[name="' + LedLightsColor + '"]').checked = true;
  document.querySelector(".LedLights-off-delay").placeholder = LedLightsDelay;
}

function getCondSettings(index) {
  const { name, status, power, blowpower, temperature, delay } = rooms[
    index
  ].devices.find((device) => device.name === "Conditioner");
  CondStatus = status;
  CondPower = power;
  CondBlowpower = blowpower;
  CondTemperature = temperature;
  CondDelay = delay;
  document.querySelector(".temperatureValue").textContent = CondTemperature;
  document.querySelector(".temperatureRange").value = CondTemperature;
  document.getElementById("Conditioner-set-power").value = CondBlowpower;
  document.querySelector(".Conditioner-off-delay").placeholder = CondDelay;
}

function getBlindsSettings(index) {
  document
    .querySelectorAll('.Blinds-set-radiobuttons input[type="radio"]')
    .forEach((radiobutton) => (radiobutton.checked = false));
  const { name, status, power, brightness, delay } = rooms[index].devices.find(
    (device) => device.name === "Blinds"
  );
  BlindsStatus = status;
  BlindsPower = power;
  BlindsBrightness = brightness;
  BlindsDelay = delay;
  document.querySelector(
    'input[name="' + BlindsBrightness + '"]'
  ).checked = true;
  document.querySelector(".Blinds-off-delay").placeholder = BlindsDelay;
}

// Функції збереження у масиві Пристроїв змінених користувачем налаштувань
function setTVSettings(index) {
  currentSmartTV = rooms[index].devices.find(
    (device) => device.name === "SmartTV"
  );
  const SmartTVVolume = document.querySelector(".volumeValue").textContent;
  const SmartTVChannel = document.querySelector(".channelInput").value;
  const SmartTVDelay = document.querySelector(".SmartTV-off-delay").value;
  currentSmartTV["volume"] = SmartTVVolume;
  currentSmartTV["channel"] = SmartTVChannel;
  currentSmartTV["delay"] = SmartTVDelay;
  document.querySelector(".SmartTV-off-delay").placeholder = SmartTVDelay;
  document.querySelector(".SmartTV-off-delay").value = "";
}

function setLightsSettings(index) {
  currentLights = rooms[index].devices.find(
    (device) => device.name === "LedLights"
  );

  // пошук позначеного чекбокса
  const Lightscheckboxes = document.querySelectorAll(
    '.LedLights-set-radiobuttons input[type="radio"]'
  );
  let selectedCheckbox = null;
  Lightscheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedCheckbox = checkbox.name;
    }
  });
  const LightsColor = selectedCheckbox;
  const LightsDelay = document.querySelector(".LedLights-off-delay").value;
  currentLights["color"] = LightsColor;
  currentLights["delay"] = LightsDelay;
  document.querySelector(".LedLights-off-delay").placeholder = LightsDelay;
  document.querySelector(".LedLights-off-delay").value = "";
  document.querySelector('input[name="' + LightsColor + '"]').checked = true;
}

function setCondSettings(index) {
  currentCond = rooms[index].devices.find(
    (device) => device.name === "Conditioner"
  );
  const ConditionerTemperature =
    document.querySelector(".temperatureValue").textContent;
  const CondBlowpower = document.getElementById("Conditioner-set-power").value;
  const ConditionerDelay = document.querySelector(
    ".Conditioner-off-delay"
  ).value;
  currentCond["temperature"] = ConditionerTemperature;
  currentCond["blowpower"] = CondBlowpower;
  currentCond["delay"] = ConditionerDelay;
  document.querySelector(".Conditioner-off-delay").placeholder =
    ConditionerDelay;
  document.querySelector(".Conditioner-off-delay").value = "";
}

function setBlindsSettings(index) {
  currentBlinds = rooms[index].devices.find(
    (device) => device.name === "Blinds"
  );

  // пошук позначеного чекбокса
  const Blindscheckboxes = document.querySelectorAll(
    '.Blinds-set-radiobuttons input[type="radio"]'
  );
  let selectedCheckbox = null;
  Blindscheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedCheckbox = checkbox.name;
    }
  });
  const BlindsBrightness = selectedCheckbox;
  const BlindsDelay = document.querySelector(".Blinds-off-delay").value;
  currentBlinds["brightness"] = BlindsBrightness;
  currentBlinds["delay"] = BlindsDelay;
  document.querySelector(".Blinds-off-delay").placeholder = BlindsDelay;
  document.querySelector(".Blinds-off-delay").value = "";
  document.querySelector(
    'input[name="' + BlindsBrightness + '"]'
  ).checked = true;
}

// виклик функцій збереження змін налаштувань пристроїв:
const applySmartTVSettings = document.querySelector(".SmartTV-off-delay-btn");

applySmartTVSettings.addEventListener("click", function (event) {
  event.preventDefault();
  setTVSettings(currentRoomIndex);
});

const applyLightsSettings = document.querySelector(".LedLights-off-delay-btn");

applyLightsSettings.addEventListener("click", function (event) {
  event.preventDefault();
  setLightsSettings(currentRoomIndex);
});

const applyCondSettings = document.querySelector(".Conditioner-off-delay-btn");

applyCondSettings.addEventListener("click", function (event) {
  event.preventDefault();
  setCondSettings(currentRoomIndex);
});

const applyBlindsSettings = document.querySelector(".Blinds-off-delay-btn");

applyBlindsSettings.addEventListener("click", function (event) {
  event.preventDefault();
  setBlindsSettings(currentRoomIndex);
});

// функція додавання нової кімнати через модальне вінко
function addNewRoom() {
  const roomName = document.getElementById("roomName").value;
  const roomCameraIP = document.getElementById("cameraIP").value;

  let newRoom = new Room(roomName, roomCameraIP, []);

  if (document.querySelector(".modal__checkboxes-light").checked) {
    newRoom.addLights();
  }
  if (document.querySelector(".modal__checkboxes-conditioner").checked) {
    newRoom.addConditioner();
  }
  if (document.querySelector(".modal__checkboxes-TV").checked) {
    newRoom.addTV();
  }
  if (document.querySelector(".modal__checkboxes-blinds").checked) {
    newRoom.addBlinds();
  }
  newRoom.addRoom(newRoom);

  addNavLink(roomName);
  setPhoto();
  // updateNavLinks(); // проба
  console.log(rooms); // перевірка
}

// Submit у формі додавання нової кімнати
const submitAddRoom = document.querySelector(".modal__userForm");
submitAddRoom.addEventListener("submit", function (event) {
  event.preventDefault();
  addNewRoom();
  // updateLocalStorageRooms(rooms);
  closeModal();
});

// додавання лінку з новою кімнатою у навігацію
function addNavLink(newRoomName) {
  const li = document.createElement("li");
  li.classList.add("room__nav-item");
  const link = document.createElement("a");
  link.classList.add("room__nav-link");
  link.textContent = newRoomName;
  link.href = "#";
  li.appendChild(link);
  document.querySelector(".room__nav").appendChild(li);
}

// створення навігаційного списку по кімнатам з масиву Кімнат
function updateNavLinks() {
  // Ім'я кожної кімнати буде додане як <li> елемент
  const navList = document.querySelector(".room__nav");
  const existingLinks = navList.querySelectorAll(".room__nav-link");

  rooms.forEach((room, index) => {
    const linkExists = Array.from(existingLinks).some(
      (link) => link.textContent === room.name
    );

    if (linkExists) {
      return;
    }

    const li = document.createElement("li");
    li.classList.add("room__nav-item");

    const link = document.createElement("a");
    link.classList.add("room__nav-link");
    link.textContent = room.name;
    link.href = "#";

    if (index === 0) {
      link.classList.add("active-nav");
    }

    li.appendChild(link);
    navList.appendChild(li);
  });
}

updateNavLinks();

// Додаємо фото кімнати у поле відеотрансляції
const roomRecord = document.querySelectorAll(".room__nav-link");
const roomPhoto = document.querySelector(".room__image-photo");
// перевірка якщо у масиві Кімнат перша не має link то підставляємо шаблон
if (rooms[0].link !== "") {
  roomPhoto.src = rooms[0].link;
}
("img/nocamera.jpg");

const ledLightBox = document.querySelector(".button-light");
const airBox = document.querySelector(".button-air");
const tvBox = document.querySelector(".button-tv");
const blindsBox = document.querySelector(".button-blinds");

// Функція отримання та присвоєння статус пристрою (on/off) з масиву пристроїв до кнопок управління

function getSetStatus(index) {
  document
    .querySelectorAll(".buttons input[type='checkbox']")
    .forEach((checkbox) => {
      checkbox.checked = false;
    });
  Array.from(document.getElementsByClassName("button")).forEach((button) => {
    button.classList.remove("on", "off", "connected", "disconnected");
    button.classList.add("off", "disconnected");
  });

  rooms[index].devices.forEach((device) => {
    currentRoom = rooms[index].name; // заміна значення поточної кімнати
    currentRoomIndex = index; // заміна значення індексу поточної кімнати
    if (device.status === "connected") {
      document.getElementById(device.name).classList.add("connected");
      document
        .getElementById(device.name)
        .classList.remove("off", "disconnected");
      document
        .getElementById(device.name)
        .querySelector(".buttons-status").textContent = "connected";
      document
        .querySelector(`.${device.name}-set`)
        .parentElement.classList.add("active");
      document.querySelector(`.${device.name}-set-box`).style.pointerEvents =
        "auto";
      document.querySelector(`.${device.name}-set-box`).style.opacity = "1";
      document.querySelector(
        `#${device.name} input[type="checkbox"]`
      ).checked = true;
    } else if (device.status === "disconnected") {
      document.getElementById(device.name).classList.add("disconnected");
      document.getElementById(device.name).classList.remove("on", "connected");
      document
        .getElementById(device.name)
        .querySelector(".buttons-status").textContent = "disconnected";
      document
        .querySelector(`.${device.name}-set`)
        .parentElement.classList.remove("active");
      document.querySelector(`.${device.name}-set-box`).style.pointerEvents =
        "none";
      document.querySelector(`.${device.name}-set-box`).style.opacity = "0.5";
      document.querySelector(
        `#${device.name} input[type="checkbox"]`
      ).checked = false;
    }
  });
  getTVSettings(currentRoomIndex); // отримання поточних налаштувань для пристрою у поточній кімнаті
  getLightSettings(currentRoomIndex); // отримання поточних налаштувань для присрвою у поточній кімнаті
  getCondSettings(currentRoomIndex); // отримання поточних налаштувань для пристрою у поточній кімнаті
  getBlindsSettings(currentRoomIndex); // отримання поточних налаштувань для пристрою у поточній кімнаті
}

getSetStatus(0); // виклик функції для першої Кімнати

// при виборі Кімнати підставляється лінк на її фото з відповідного об'єкту
//та оновлюються кнопки пристроїв відповідно до підключення

function setPhoto() {
  roomRecord.forEach((link) => {
    link.addEventListener("click", function () {
      const linkName = link.textContent;
      const roomObject = rooms.find((room) => room.name === linkName);
      getSetStatus(rooms.indexOf(roomObject)); // виклик функції GetSet для обраної Кімнати
      if (roomObject) {
        roomPhoto.src = roomObject.link;
      }
      roomRecord.forEach((link) => {
        link.classList.remove("active-nav");
      });
      this.classList.add("active-nav");
    });
  });
}

setPhoto();

// виключення відеотрансляції
document.querySelector(".checkbox-rec").addEventListener("change", function () {
  if (this.checked) {
    document.querySelector(".camera-text").innerHTML = "Recording in progress";
    document.querySelector(".room__cameraoff").style.display = "none";
    document.querySelector(".room__image-photo").style.filter = "none";
    document.querySelector(".rec-icon").style.display = "block";
    document.querySelector(".current-time").style.display = "block";
  } else {
    document.querySelector(".camera-text").innerHTML = "Recording stoped";
    document.querySelector(".room__cameraoff").style.display = "block";
    document.querySelector(".room__image-photo").style.filter =
      "grayscale(100%)";
    document.querySelector(".rec-icon").style.display = "none";
    document.querySelector(".current-time").style.display = "none";
  }
});

// імітація відеотрансляції (блимаючий червоний вогник)
function recIcon() {
  const recIcon = document.querySelector(".rec-icon");
  recIcon.style.visibility =
    recIcon.style.visibility === "hidden" ? "visible" : "hidden";
}
setInterval(recIcon, 1000);

// динамічний поточний час
function updateTime() {
  const currentDateTime = new Date().toLocaleString();
  document.querySelector(".current-time").textContent = currentDateTime;
}

updateTime();
setInterval(updateTime, 1000);

// при виборі чекбокса в полі налаштувань інші галочки знімаються
const LightsСheckboxes = document.querySelectorAll(
  '.LedLights-set-radiobuttons input[type="radio"]'
);

LightsСheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    LightsСheckboxes.forEach((cb) => {
      if (cb !== checkbox) {
        cb.checked = false;
      }
    });
  });
});

const BlindsСheckboxes = document.querySelectorAll(
  '.Blinds-set-radiobuttons input[type="radio"]'
);

BlindsСheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    BlindsСheckboxes.forEach((cb) => {
      if (cb !== checkbox) {
        cb.checked = false;
      }
    });
  });
});

// кнопка відключення світла з імітацією згасання світла у полі відеонагляду
// і зміна стилізації поля з налаштуваннями
document
  .querySelector(".checkbox-light")
  .addEventListener("change", function () {
    if (document.querySelector(".checkbox-rec").checked) {
      if (this.checked) {
        document.querySelector(".button.button-light").classList.add("active");
        document
          .querySelector(".LedLights-set")
          .parentElement.classList.add("active");
        document.querySelector(".room__image-photo").style.opacity = "1";
        document.querySelector(".LedLights-set-box").style.pointerEvents =
          "auto";
        document.querySelector(".LedLights-set-box").style.opacity = "1";
      } else {
        document
          .querySelector(".button.button-light")
          .classList.remove("active");
        document
          .querySelector(".LedLights-set")
          .parentElement.classList.remove("active");

        document.querySelector(".room__image-photo").style.opacity = "0.3";
        document.querySelector(".LedLights-set-box").style.pointerEvents =
          "none";
        document.querySelector(".LedLights-set-box").style.opacity = "0.5";
      }
    } else {
      if (this.checked) {
        document.querySelector(".button.button-light").classList.add("active");
        document
          .querySelector(".LedLights-set")
          .parentElement.classList.add("active");

        document.querySelector(".LedLights-set-box").style.pointerEvents =
          "auto";
        document.querySelector(".LedLights-set-box").style.opacity = "1";
      } else {
        document
          .querySelector(".button.button-light")
          .classList.remove("active");
        document
          .querySelector(".LedLights-set")
          .parentElement.classList.remove("active");

        document.querySelector(".LedLights-set-box").style.pointerEvents =
          "none";
        document.querySelector(".LedLights-set-box").style.opacity = "0.5";
      }
    }
  });

// кнопка відключення кондиціонера зі зміною стилізації поля з налаштуваннями
document.querySelector(".checkbox-air").addEventListener("change", function () {
  if (this.checked) {
    document.querySelector(".button.button-air").classList.add("active");
    document
      .querySelector(".Conditioner-set")
      .parentElement.classList.add("active");
    document.querySelector(".Conditioner-set-box").style.pointerEvents = "auto";
    document.querySelector(".Conditioner-set-box").style.opacity = "1";
  } else {
    document.querySelector(".button.button-air").classList.remove("active");
    document
      .querySelector(".Conditioner-set")
      .parentElement.classList.remove("active");
    document.querySelector(".Conditioner-set-box").style.pointerEvents = "none";
    document.querySelector(".Conditioner-set-box").style.opacity = "0.5";
  }
});

// кнопка відключення телевізора зі зміною стилізації поля з налаштуваннями
document.querySelector(".checkbox-tv").addEventListener("change", function () {
  if (this.checked) {
    document.querySelector(".button.button-tv").classList.add("active");
    document
      .querySelector(".SmartTV-set")
      .parentElement.classList.add("active");
    document.querySelector(".SmartTV-set-box").style.pointerEvents = "auto";
    document.querySelector(".SmartTV-set-box").style.opacity = "1";
  } else {
    document.querySelector(".button.button-tv").classList.remove("active");
    document
      .querySelector(".SmartTV-set")
      .parentElement.classList.remove("active");
    document.querySelector(".SmartTV-set-box").style.pointerEvents = "none";
    document.querySelector(".SmartTV-set-box").style.opacity = "0.5";
  }
});

// кнопка відключення жалюзів зі зміною стилізації поля з налаштуваннями
document
  .querySelector(".checkbox-blinds")
  .addEventListener("change", function () {
    if (this.checked) {
      document.querySelector(".button.button-blinds").classList.add("active");
      document
        .querySelector(".Blinds-set")
        .parentElement.classList.add("active");
      document.querySelector(".Blinds-set-box").style.pointerEvents = "auto";
      document.querySelector(".Blinds-set-box").style.opacity = "1";
    } else {
      document
        .querySelector(".button.button-blinds")
        .classList.remove("active");
      document
        .querySelector(".Blinds-set")
        .parentElement.classList.remove("active");
      document.querySelector(".Blinds-set-box").style.pointerEvents = "none";
      document.querySelector(".Blinds-set-box").style.opacity = "0.5";
    }
  });

// зміна значення у бігунка вибору гучності ТВ
const volumeRange = document.querySelector(".volumeRange");
const volumeValue = document.querySelector(".volumeValue");
volumeRange.addEventListener("input", function () {
  volumeValue.textContent = volumeRange.value;
});

// кнопки + та - для зміни номера канала ТВ
const channelInput = document.querySelector(".channelInput");
const increaseChannel = document.querySelector(".increaseChannel");
const decreaseChannel = document.querySelector(".decreaseChannel");
increaseChannel.addEventListener("click", function () {
  channelInput.stepUp();
});
decreaseChannel.addEventListener("click", function () {
  channelInput.stepDown();
});

// зміна значення у бігунка вибору температури кондиціонера
const temperatureRange = document.querySelector(".temperatureRange");
const temperatureValue = document.querySelector(".temperatureValue");
temperatureRange.addEventListener("input", function () {
  temperatureValue.textContent = temperatureRange.value;
});

// обмеження кількості Rooms, які можна додати
const roomsLimit = 5;

// відкриття модального вікна для додавання нової кімнати
function openModal() {
  if (rooms.length == roomsLimit) {
    alert(
      "\nSorry, in this TRIAL version you \n\ncan't add more than 5 rooms!\n\nPlease purchase FULL version!"
    );
    closeModal();
  } else {
    document.getElementById("addModal").style.display = "block";
  }
}

// закриття модального вікна
function closeModal() {
  document.getElementById("addModal").style.display = "none";
  document.querySelector(".modal__userForm").reset();
}

// ще не реалізована функція видалення кімнати з масиву Кімнат
function removeRoom() {
  alert(
    "\nSorry, in this TRIAL version you \n\ncan't remove your rooms!\n\nPlease purchase FULL version!"
  );
}

// код для використання LocalStorage

// const localRooms = JSON.parse(localStorage.getItem("savedRooms")) || [];
//встановити стартовий масив у localStorage:
// localRooms.push(rooms);
// localStorage.setItem("savedRooms", JSON.stringify(rooms)); // або rooms??
// ?????? перевірити
// function updateLocalStorage() {
//   localRooms.push(rooms);
//   localStorage.setItem("savedRooms", JSON.stringify(localRooms)); // або rooms??
// }
// console.log(localStorage.getItem("savedRooms"));
//Додавання масиву кімнат з пристроями до LocalStorage:
//?????
// function updateLocalStorageRooms(newRoomsArray) {
//   localStorage.setItem("savedRooms", JSON.stringify(newRoomsArray));
// }

//-------------------//

// function alertArray() {
//   rooms.map((room) => alert(JSON.stringify(room)));
// }
// alertArray()
