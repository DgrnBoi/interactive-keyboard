document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.querySelector('.PT_DISPLAY');
    const keys = document.querySelectorAll('.PT_19_JAN_ES_KEY');
    
    // State
    let isCapsLock = false;
    let isShift = false;

    // --- 1. Handle Virtual Key Clicks ---
    keys.forEach(key => {
        key.addEventListener('mousedown', (e) => {
            e.preventDefault(); // Prevent focus loss from textarea
            handleInput(key);
            triggerVisualPress(key);
        });
    });

    // --- 2. Handle Physical Key Presses ---
    document.addEventListener('keydown', (e) => {
        const key = document.querySelector(`.PT_19_JAN_ES_KEY[data-code="${e.code}"]`);
        if (!key) return;

        e.preventDefault(); // Stop default browser action to use our custom logic
        triggerVisualPress(key);
        handleInput(key);
    });

    document.addEventListener('keyup', (e) => {
        const key = document.querySelector(`.PT_19_JAN_ES_KEY[data-code="${e.code}"]`);
        if (key) {
            key.classList.remove('active');
            // Handle Shift release
            if (e.key === 'Shift') isShift = false;
        }
    });

    // --- 3. Core Logic ---

    function handleInput(keyElement) {
        const action = keyElement.dataset.action;
        const value = keyElement.dataset.key;
        const shiftValue = keyElement.dataset.shift;

        // Handle Special Keys
        if (action === 'backspace') {
            textarea.value = textarea.value.slice(0, -1);
        } 
        else if (action === 'enter') {
            textarea.value += '\n';
        } 
        else if (action === 'space') {
            textarea.value += ' ';
        } 
        else if (action === 'tab') {
            textarea.value += '    ';
        } 
        else if (action === 'caps') {
            isCapsLock = !isCapsLock;
            keyElement.classList.toggle('caps-active');
        } 
        else if (action === 'shift') {
            isShift = true;
        }
        // Handle Character Keys
        else if (value) {
            let charToAdd = value;

            if (isShift && shiftValue) {
                // Symbols like !, @, #
                charToAdd = shiftValue;
            } else if (isShift || isCapsLock) {
                // Letters (simple logic: Caps affects letters, Shift affects everything)
                // If it's a letter
                if (value.length === 1 && value.match(/[a-z]/i)) {
                     // logical XOR for Caps + Shift (Shift+Caps = lowercase)
                    const shouldUpper = (isShift !== isCapsLock); 
                    charToAdd = shouldUpper ? value.toUpperCase() : value.toLowerCase();
                } else if (isShift) {
                     // Non-letters with shift (like symbols without explicit shift data)
                     charToAdd = shiftValue || value;
                }
            }
            
            textarea.value += charToAdd;
        }

        // Keep focus on textarea
        textarea.scrollTop = textarea.scrollHeight;
    }

    function triggerVisualPress(keyElement) {
        keyElement.classList.add('active');
        // If it's not a holding key (like shift), remove active style shortly after
        // This is mainly for virtual clicks
        setTimeout(() => {
            if(keyElement.dataset.action !== 'shift') {
                keyElement.classList.remove('active');
            }
        }, 150);
    }
});