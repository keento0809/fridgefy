# App Idea

fridgefy - React Version

# User stories

User Story | Job Story
as a <role> | When I <action>
I want <goal> | I want <goal>
so that <gain> | so that <gain>

## Story 1 (Log In):

As a user,
I want sign in with my google account
and get access to all the cooking recepies
that I want

# Story 2 (My Recepies):

As a user,
with my account signed in
I can create a list of Favorite recepies

# Data Structure

```js
// recepie

// My Fridge

// lists of favs

# HTML Structure

- body
  - header
    - Label (Fridgefy)
    - Route (Recepies)
    - Route (My Shoping List)
    - Label (Hello User)
    - Button (LogIn)
    - Button (LogOut)
  - main
  - Route Recepies
    - section My Fridge (Left of Screen)
      - h3 My Fridge
      - Input (Search with Filters)
      - Button (Add)
      - ul All my items
        - li (items)
            - Button (Delete Button 'X')
    - section Recepie Book(Middle of Screen)
      - Input (Search)
      - Filter Area (Filter Options ????)
      - Recepie Card
        - Image
        - Button (More???)
        - Button (Add)
    - section My Recipes (Right of Screen)
      - h3 My Recipes
      - ul All my Recepies
        - li Recepie
            - Button (Delete Button 'X')
- Route My Shoping List
    - section My Fridge (Left of Screen)
    *** Same as on Route Recepies ***
    - section Recepie Book(Middle of Screen)
        - Div
            - Label (Recepi Name)
            - Button (Delete Button 'X')
            - Display Button
        - Div
            - Label (Recepi Name)
            - Button (Delete Button 'X')
            - Display Button
            - p (More Info)
            - Image
    - section Items to Buy (Right of Screen)
        - h3 Items to Buy
         - ul All my Items
             - li Recepie
                 - Button (Delete Button 'X')
    

# Component Structure

- App
  - Header
  - Route Recepies
  - Route My Shoping List


# Data Map