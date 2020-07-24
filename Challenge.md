# Cypress Challenge
Update the `hy_tech.spec.js` code so that it performs the actions listed below. This will involve using the Selector Playground, updating the code in the `hy_tech.spec.js` file, and running the test in the Cypress browser.

Refer to the [Cypress Commands Cheat Sheet](CypressCommandsCheatSheet.md) for help along the way.

#### Note - Removing Cart Items
Make sure to remove the items from the cart manually after each test runs. This will ensure that the items have not been added already when the automated test tries to add them.

## Actions
These actions should be performed by the automated test.

1. Log in as "standard_user"
    - This part was already completed during the [Follow-Along](FollowAlong.md) activity
1. Add an item or two to the Cart
    - These can be any items, just make a note of the item names
1. Visit the Cart
    - Click on the cart icon in the upper right
1. Verify that the items in the cart match the items that were added
    - The names of the items clicked should match the names in the cart
1. Check out
    - Click on the "CHECKOUT" button
1. Enter user information
    - This can be any information
1. Verify that the items are still the same on the "Overview" screen
    - The names should match again
1. Finish the order
    - Click on the "FINISH" button
1. Verify that the "Finish" screen appears
    - Check the text on the page

## BONUS: Create a New `it` Test
After testing the cart and checkout functionality, add another `it` test and test some other functionality on the page. Try opening up the hamburger menu in the upper left and verifying that all the items go to the correct places!