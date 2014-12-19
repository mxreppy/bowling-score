class: center, middle

# Bowling Kata

---

# Setup (optional)

Install Node.js and npm

Create a package.json file and install mocha testing framework
 - npm init
 - npm install mocha --save-dev
 - npm install should --save-dev


In a terminal window, run 
$ mocha -w
or 
$ mocha -w -C -R spec -G 


We will use http://mochajs.org/ for a test framework with shouldjs for BDD style assertions https://github.com/shouldjs/should.js

---

# How to score Bowling

http://en.wikipedia.org/wiki/Ten-pin_bowling

![Bowling Frame](http://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Bowlstrike.PNG/330px-Bowlstrike.PNG)

---


# External API

- call roll for each roll
- calculate score at the end
- Assume good inputs (rolls always equal a full game)


    +--------------------+
    | Game               |
    | ------------------ |
    | + roll(pins : int) |
    | + score() : int    |
    +--------------------+

---


#Gutter Game
    
If all 20 rolls are 0 (gutter ball), the score should be 0

```javascript
for (i; i < 20; i ++) {
    game.roll(0);
}
game.score().should.equal(0);
```
    

---

#Simple games
    
If all 20 rolls are 1 the score should be 10

```javascript
for (i; i < 20; i ++) {
    game.roll(1);
}
game.score().should.equal(10);
```
---

#Refactor Tests

## Always be stable!

Use *Working Code* as tests for test code

- Condense ``for`` loops into ``rollMany``
- Does this belong in Production code OR Test code?

---

# Sum games

If all rolls are less than or equal to 4, the score is the sum of the rolls 

- roll 3 10 times
- roll 4 10 times

- score should be 70

---

# Game with a single spare

if we roll a 5 three times, and then all zeros the score should be 15

- roll a 5 3 times
- roll 0 17 times

- Score should be 15

You may need to remove this test, refactor, then procede 

---

#Possible object model
.omodel[![object model](https://raw.github.com/pixelhandler/vagrant-dev-env/bowling/www/app/images/frame_class_next.png)]
---

# Game with a single strike

if we roll a Strike , then a 3 two times, and then all zeros the score should be 16

- roll a 10 one time
- roll a 3 two times

- Score should be 15

---

# Game with mixed strikes and spares

Rolls:
3,4,6,4,7,1,4,5,10,4,6,10,10,10,5,5,3 = 169

---

# New Requirement!

## Bad input!
- Throw an exception if score is called and you don't have a complete game

---

# New Requirement!

## Per frame scoring

- be able to call score at any time and return the current score
- return known score if current frame cannot be scored


---

# New Requirement!

## Kids bolwing

- GutterBalls are not allowed
- All rolls of 0 are re-rolled
- Kid bolwing will be indicated by the caller (constructor arg?)

 
---

# Klingon Bowling

- Each frame gets 3 rolls
- the lowest roll is considered ghojwI' (“student”)
- two consective 0 rolls earns bIj (“punishment”) of -10

## As for project orders (requirements, goals): Klingons do not deliver; we EXECUTE. For the glory of the empire!
