# Cypress Follow-Along Activity
Complete this activity to begin writing some tests with Cypress.

To start, the **hy_tech.spec.js** file should contain the following code:

```js
/// <reference types="cypress" />

context('Hy-Tech Camp', () => {

  it('visits the sample website', () => {
    cy.visit('https://www.saucedemo.com')
  })
})
```

This code will open up the web browser and visit the Sauce Demo URL.

## Opening the Test Runner
In Visual Studio Code, open the "Terminal" menu and select "New Terminal" at the top:

![](https://i.imgur.com/itO46Pd.png)

When the terminal opens, type in `npx cypress open` and press Enter:

![](https://i.imgur.com/8xFf8KH.png)

After that, the test runner should open! Click on the `hy_tech.spec.js` test to run it:

![](https://i.imgur.com/ouBlS5M.png)

This will open the web browser and run the test. So far, all it does is open up the Sauce Demo website.

Next, use some code to tell the test what it should do! The first thing to test is the login process. To do that, the "tester" needs to type in a username and password, and click the "Submit" button.

## Getting the Username Text Box
On the top bar, click the crosshair icon to open the **Selector Playground**:

![](https://i.imgur.com/Rq99SuO.png)

This tool allows the developer to select different parts of the webpage in order to interact with them. Hover over the "Username" text box, and click it when it is highlighted. That should update the text next to `cy.get` at the top:

![](https://i.imgur.com/uvzGFv3.png)

Next to that, click the "Copy to Clipboard" button to copy the selector text:

![](https://i.imgur.com/FfGdAns.png)

That text is a piece of code that will _select_ the text box so it can be manipulated. Go back into the **hy_tech.spec.js** file in Visual Studio Code, and paste that code under the `cy.visit` command. It should look something like this:

```js
/// <reference types="cypress" />

context('Hy-Tech Camp', () => {

  it('visits the sample website', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test=username]')
  })
})
```

The test should begin to run again automatically when the file is saved.

## Entering Text into the Username Text Box
Now that the text box has been selected in the code, it is possible to enter text. At the end of the `cy.get` line, add `.type('standard_user')` after the right parenthesis. Save the file, and re-open the Cypress browser to see the text entered in the box!

At this point, the code should look like this:

```js
/// <reference types="cypress" />

context('Hy-Tech Camp', () => {

  it('visits the sample website', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test=username]').type('standard_user')
  })
})
```

## Filling Out the Password Text Box
Filling out the Password text box will be very similar to filling out the Username text box.

1. Open the Cypress browser
1. Ensure that the Selector Playground tool is activated
1. Click on the "Password" text box to select it
1. Click the "Copy to Clipboard" button to copy the `cy.get` command
1. Open the `hy_tech.spec.js` file in Visual Studio Code
1. Make a new line under the other `cy.get` command
1. Paste in the new `cy.get` command
1. After the right parenthesis of the new command, add the code to type in a password of "secret_sauce"
1. Save the file, and the test should re-run automatically!

### Code
```js
cy.get('[data-test=password]').type('secret_sauce')
```

## Clicking the Login Button
Now that the username and password have been entered, it is time to click the "Login" button.

1. Open the Cypress browser
1. Ensure that the Selector Playground tool is activated
1. Click on the "Login" button to select it
1. Click the "Copy to Clipboard" button to copy the `cy.get` command
1. Open the `hy_tech.spec.js` file in Visual Studio Code
1. Make a new line under the previous `cy.get` command
1. Paste in the new `cy.get` command
1. After the right parenthesis of the new command, add `.click()` to click the button
1. Save the file, and the test should re-run automatically!

### Code
```js
cy.get('#login-button').click()
```

## Running a Test
At this point, the test runner should successfully log into the Sauce Demo website. The site _should_ load the products page after logging in. Verify that the intended behavior is actually occuring by using `should`.

1. Open the Cypress browser
1. Ensure that the Selector Playground tool is activated
1. Click on the header where it says "Products"
1. Click the "Copy to Clipboard" button to copy the `cy.get` command
1. Open the `hy_tech.spec.js` file in Visual Studio Code
1. Make a new line under the previous `cy.get` command
1. Paste in the new `cy.get` command
1. After the right parenthesis of the new command, add `.should()`
1. Between the parentheses, type in `'contain', 'Products'`
    - Note that it must be case sensitive
1. Save the file, and the test should re-run automatically!

At this point, the test should pass. Note that the code reads a lot like plain English: "The product label should contain the word Products."

### Code
```js
cy.get('.product_label').should('contain', 'Products')
```

## Final Code
By the end of the activity, the code should look like this:

```js
/// <reference types="cypress" />

context('Hy-Tech Camp', () => {

  it('visits the sample website', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test=username]').type('standard_user')
    cy.get('[data-test=password]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.product_label').should('contain', 'Products')
  })
})
```

The test runner should open the website, enter the username and password, click the Login button, and verify that the page opened is the 'Products' page!