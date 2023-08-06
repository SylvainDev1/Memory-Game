# Memory-Game

Project from a code along video. Added more cards than in the example, and cards fo different format.
Added a "Win" message that appears on game completion.

Project with interesting functionalities like setting and comparing 2 choices of cards.
UseState and UseEffect hooks.

Found a bug on a phone using Google Translate automatically on Chrome browser: the "turns" variable wouldn't update and stay at 0.
This is due to Google Translate modifying the DOM and breaking React functionalities.
Interesting thread about this here: https://bugs.chromium.org/p/chromium/issues/detail?id=872770
