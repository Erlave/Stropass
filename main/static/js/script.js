// گرفتن عناصر HTML
const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("length-value");
const plusBtn = document.getElementById('plus');
const minBtn = document.getElementById('min');
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const resultBox = document.getElementById("result");
const copyBtn = document.getElementById("copy-btn");
const copyMsg = document.getElementById("copy-msg");
const clearbtn = document.getElementById("clear");

// بروزرسانی نمایش مقدار اسلایدر
lengthSlider.addEventListener("input", function () {
  lengthValue.textContent = lengthSlider.value;


});


function updateLengthDisplay() {
    lengthValue.textContent = lengthSlider.value;
  }
plusBtn.addEventListener('click', () => {
  let currentValue = parseInt(lengthSlider.value);
  if (currentValue < parseInt(lengthSlider.max)) {
    lengthSlider.value = currentValue + 1;
    updateLengthDisplay();
  }
});
  
minBtn.addEventListener('click', () => {
  let currentValue = parseInt(lengthSlider.value);
  if (currentValue > parseInt(lengthSlider.min)) {
    lengthSlider.value = currentValue - 1;
    updateLengthDisplay();
  }
});

lengthSlider.addEventListener('input', updateLengthDisplay);

// تابع تولید رمز
function generatePassword(length) {console.log("pass generate");
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  let characters = "";

  // بررسی انتخاب‌های کاربر
  if (uppercaseCheckbox.checked) characters += uppercase;
  if (lowercaseCheckbox.checked) characters += lowercase;
  if (numbersCheckbox.checked) characters += numbers;
  if (symbolsCheckbox.checked) characters += symbols;

  // اگه هیچ گزینه‌ای انتخاب نشده، پسورد ساخته نمیشه
  if (!characters) {
    alert("Please select at least one option!");
    return;
  }

  // ساخت پسورد
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }

  return password;
}

// رویداد کلیک دکمه Generate
generateBtn.addEventListener("click", function () {
  const length = lengthSlider.value;  // گرفتن طول از اسلایدر
  const password = generatePassword(length);  // تولید رمز
  if (password) {
    resultBox.value = password;  // نمایش پسورد در فیلد input
  }
});
clearbtn.addEventListener("click",function(){
  resultBox.value = '';
})

// رویداد کلیک دکمه Copy
copyBtn.addEventListener("click", function () {
  const password = resultBox.value;  // گرفتن پسورد از input
  navigator.clipboard.writeText(password)  // کپی کردن پسورد به کلیپ‌بورد
    .then(() => {

    })

});