function glyphScrambler(glyphPre) {
    //create a 94 different keys below
    var defaultGlyphKeys = [
        "Example", "How", "To", "Write", "Keys", "However", 
        "Do", "This", "94", "Times"
    ];

    var userGlyphKeys = [];
    var glyphScrambled = "";
    for (var i = 0; i < glyphPre.length; i++) {
        var letter = glyphPre.charCodeAt(i);
        if (letter >= 32 && letter <= 126) {
            glyphScrambled += defaultGlyphKeys[letter - 32];
        } else {
            glyphScrambled += letter;
        }
    }
    return glyphScrambled;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('scrambler-glyphlock').addEventListener('click', () => {
        console.log('Scramble button clicked');
        window.open('popupscramble.html', '_blank', 'width=400,height=300');
        window.close('popup.html');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('scramble-glyph').addEventListener('click', () => {
        console.log('Scramble Glyph Button Clicked')
        const userInput = document.getElementById('glyph-input').value;
        if (userInput) {
            const scrambledGlyph = glyphScrambler(userInput);
            const glyph = 'Glyph: ' + scrambledGlyph;
            document.getElementById('glyphScrambled').innerText = glyph;
        } else {
            document.getElementById('glyph').innerText = 'Error Code 101'
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('glyph-input').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            console.log('Scramble Glyph Button Clicked')
            const userInput = document.getElementById('glyph-input').value;
            if (userInput) {
                const scrambledGlyph = glyphScrambler(userInput);
                const glyph = 'Glyph: ' + scrambledGlyph;
                document.getElementById('glyphScrambled').innerText = glyph;
            } else {
                document.getElementById('glyph').innerText = 'Error Code 101'
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('info-glyphlock').addEventListener('click', () => {
        console.log('Info Button Clicked');
        window.open('popupinfo.html', '_blank', 'width=400,height=300');
        window.close(popup.html);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('close-glyphlock').addEventListener('click', () => {
        window.close('popup.html');
    });
});

