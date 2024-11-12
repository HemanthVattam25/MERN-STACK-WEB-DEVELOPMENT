# Throw Dice Game

You and your two team members are working on a construct week project. An issue arises, and all three of you come up with feasible solutions. Since each person wants to implement their own solution, you decide to roll a dice to determine whose solution will be used.

This app simulates rolling three dice to randomly generate a number between 1 and 6 for each team member, with the highest roll deciding the winner.

## Problem Statement

Create an app with three dice that show random numbers from 1 to 6. Each dice represents a team member:

- Dice 1 represents Member A
- Dice 2 represents Member B
- Dice 3 represents Member C

The app should include a button to roll all three dice simultaneously and determine the winner based on the highest roll.

## Requirements

1. **HTML Structure:**

   - Create an `index.html` file.
   - Create three `div` elements representing the three dice, each showing a random number between 1 and 6.
   - Add a `div` at the top to display the winner.
   - Add a button to roll all three dice.

2. **ID Assignments:**

   - First dice should have the ID `member-1`.
   - Second dice should have the ID `member-2`.
   - Third dice should have the ID `member-3`.
   - The roll button should have the ID `roll`.
   - The winner display should have the ID `winner`.

3. **Functionality:**
   - Clicking the "ROLL THE DICE" button should roll all three dice and display a random number (1 to 6) in each dice `div`.
   - The `div` with the highest score will display in green.
   - The `div` with the second highest score will display in yellow.
   - The `div` with the lowest score will display in red.
   - In case of a tie, dice with the same score should appear in blue.
