# 💻 StroPass - Password Generator with Django

A simple and elegant password generator built using **Django**. Choose your desired password length and character types, then generate a strong and secure password. Copy it with a single click!

---

## 🚀 Features
- Set password length via slider or buttons
- Choose to include lowercase, uppercase, numbers, and symbols
- Copy password to clipboard
- Responsive, simple, and modern design

---

## 🔧 Requirements
Make sure you have the following installed:

- Python 3.8+
- pip (Python package installer)

> Optional (but recommended):
- virtualenv

---

## 🛠️ Installation & Run

### 1. Clone the repository
```bash
git clone https://github.com/YOUR-USERNAME/stropass.git
cd stropass
```

### 2. Create virtual environment (optional but recommended)
```bash
python -m venv venv
# Activate it:
venv\Scripts\activate     # On Windows
source venv/bin/activate   # On macOS/Linux
```

### 3. Install dependencies
```bash
pip install django
```

> If you have a `requirements.txt` file:
```bash
pip install -r requirements.txt
```

### 4. Run migrations (if needed)
```bash
python manage.py migrate
```

### 5. Start the development server
```bash
python manage.py runserver
```

Open your browser and go to: [http://127.0.0.1:8000/](http://127.0.0.1:8000/)

---

## 📁 Project Structure
```
stropass/
├── main/
│   ├── static/
│   │   ├── js/
│   │   │   └── script.js
│   │   └── style.css
│   ├── templates/
│   │   └── index.html
│   ├── views.py
│   └── url.py
├── stropass/
│   ├── settings.py
│   └── urls.py
├── manage.py
└── .gitignore
```

---

## 📄 License
This project is open-source and free to use.

---

## 🙌 Author
Made with 💙 by **YOUR NAME**

GitHub: [@YOUR-USERNAME](https://github.com/Erlave)

