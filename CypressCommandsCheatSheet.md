# Cypress Commands Cheat Sheet

## Getting an Element
`cy.get()` can be used to _select_ an element. In general, it is easier to use the Cypress Selector Playground to generate these commands. In the Cypress browser, open Selector playground, click on the desired element, and click the "Copy to Clipboard" button.

![](https://i.imgur.com/Rq99SuO.png)

![](https://i.imgur.com/uvzGFv3.png)

![](https://i.imgur.com/FfGdAns.png)

### Example
```js
cy.get('#login-button')
```

## Typing into a Text Box
`.type()` can be added to the end of a `cy.get()` command to type text into an element.

### Example
```js
cy.get('.username-input').type('myname')
```

## Clicking an Element
`.click()` can be added to the end of a `cy.get()` command to click on an element.

### Example
```js
cy.get('#login-button').click()
```

## Verifying an Element Contains Certain Text
`.should()` can be added to the end of a `cy.get()` command to check the contents of an element.

### Example
```js
cy.get('.label').should('contain', 'Cart')
```