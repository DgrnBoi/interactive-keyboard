
# ⌨️ PrimaThink Interactive Keyboard

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

A fully functional virtual keyboard interface that interacts with both mouse clicks and physical keyboard inputs. This project demonstrates DOM manipulation, event listening, and responsive CSS styling without the use of external frameworks.

## 🔗 Live Demo
[**Click here to try the Live Keyboard**]([(https://github.com/DgrnBoi/interactive-keyboard)])

## ✨ Features

* **Dual Interaction:** Works by clicking keys on the screen OR pressing keys on your physical keyboard.
* **Real-time Visual Feedback:** Virtual keys light up and simulate a "press" animation when corresponding physical keys are hit.
* **Functional Display:** A text area captures input, supporting typing, backspacing, and spacing.
* **Logic Handling:**
    * **Caps Lock:** Toggles uppercase state with a persistent visual indicator.
    * **Shift Key:** correctly modifies letters to uppercase and numbers to symbols (e.g., `1` → `!`).
* **Responsive Design:** The keyboard scales down smoothly for smaller screens and mobile devices using CSS transforms.
* **Modern UI:** Styled with CSS gradients, shadows, and a "PrimaThink" branded dark theme.

## 🛠️ Tech Stack

* **HTML5:** Semantic structure for the keyboard layout.
* **CSS3:** Flexbox for layout, CSS Gradients for aesthetics, and media queries for responsiveness.
* **Vanilla JavaScript:** * `keydown` and `keyup` event listeners for physical input.
    * `mousedown` listeners for virtual clicks.
    * DOM manipulation to update the display screen.

## 📂 Project Structure

```text
├── index.html    # The main structure and layout
├── styles.css    # All styling, animations, and responsive rules
├── script.js     # The logic engine (Events, State management)
└── README.md     # Project documentation
