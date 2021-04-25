Bingo game constructed in the time limit of 4 hours.
Responsiveness, modularity and scalable functionality are guaranteed, unique design and creativity is quite barebones since time was short.

I treated this project like a real request from an external client, therefore also thinking of future possible last minute requests which requires a robust and scalable code base.
Description of how I worked my way through:
# 1. Analyze given task and note planned approach
Looking up bingo rules and brainstorming what components and architecture will be needed.
 
The game will require a *Tile* and a *BingoBoard* component - BingoBoard is the mother flagship that controls all state and functions.

A Tile consists of a value, marked and disabled property. Upon clicking a tile it should be marked and disabled to avoid further function invocations.
The BingoBoard controls the state of these Tiles and renders them, also providing them the algorithm to check for Bingo and the celebration state (controlled state approach instead of uncontrolled).

As soon as a tile is clicked and the callback function/algorithm detects Bingo (the algorithm should also be working with grids of different sizes), a nice animation should start.
The animation should take place globally not in every Tile but on a global scale - The whole grid should start levitating with some super mario speed trail effects and dancing while simultaneously all Tiles are changing their colors back and forth for 3 seconds (beware fellow epileptics!). Global scale requires a context/provider approach and is therefore scalable (in case additional client requests like "I want the footer/navbar to dance too" come in).

The Tile in the middle of the board should be a special tile in order to not be restricted by the structure of normal Tiles -> scalability (in case additional requests like "The special tile should be a video container" come in).
I had a invincibility providing super mario star in mind that is constantly blinking.
The content of theses Tiles should not be typical sentences you hear during meetings but meme and pop culture references (examples: "may the force be with you", "bazinga", "thanos was right").
The order of these tiles should be shuffled on every refresh.

Stack and Architecture:
React, Emotion (due to state based styling), typescript.
Context Provider and [atomic design](https://atomicdesign.bradfrost.com/table-of-contents/).

# 2. Implementation order and time logs
- Brainstorming and analysis of necessary stack and algorithms (1 1/2 hours).
- Grid and responsiveness first. (1/2 hours).
- BingoBoard and Tile skeleton. (10 minutes).
- BingoBoard state and functions. (20 minutes).
- Scalable Bingo algorithm which could be used for any random grid size (1 1/2 hours).

# 3. Result and shortcomings
- Planned stack and architecture was used.
- Grid is responsive but only contains placeholders since time was missing for gathering 24 pop culture / meme references.
- Bingo algorithm works and is scalable with any grid size.
- Normal pre marked centered (special) Tile instead of a fancy glowing star.
- No animation, just alert box instead due to time running out.

# 4. Mistakes
- Too much time was invested in brainstorming the project and thinking of ways how to project my personality/hobbies into it. While this process should NEVER be skipped imho it is sometimes more time efficient to just do stuff and learn on the go, especially if it is a task you have never done before (since my main profession is web development instead of software development I actually haven't coded with 2 dimensional arrays and didn't need a broader knowledge of algorithms yet).
- Neglected learning algorithms & data structure for too long - it shows in this project since they took most of the time.
- When restricted with such a short time to develop it is not a good idea to try making everything scalable to defend against famous last minute changing requests.
Therefore the algorithm for checking for bingo should have been hardcoded (similiar to the [official react docu](https://reactjs.org/tutorial/tutorial.html#declaring-a-winner)) and the assumption of a middle Tile being able to be very different from the rest should have been dropped.

# 5. Conclusion
Broaden my knowledge of existing animation libraries to support my wild/stylish fantasies in a quick and easy way.

Dive deeper into algorithms & data structure lessons (even though they are rarely needed for building classic corporate websites or components).

... also dive deeper into meme culture to easily whip out at least 24 funny references/citations! ;)
