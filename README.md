# Development

### Link to Deployed Website
If you used the stencil code, this is `https://sillyseal111.github.io/development-plants`

### Goal and Value of the Application
This application serves as a store where you can browse plants by
size, sunlight level, maximum height, and preferred setting, then add the plants you like to your cart where you can see the total price of all your liked plants. 

### Usability Principles Considered
I made sure that information with different levels of importance have different hierarchies. The title of the page, "Plants!", for example, has a higher hierarchy than the cart or plant titles. 
I also organized the plants and the cart into their own cards, so that it is easier to see which information goes with which plant.  

### Organization of Components
I created separate components for the main elements of the page and even for some smaller elements. For example, the main components shown on the page are the FilterNav, SortNav, Cart, and FinalFilter (which is the filtered and sorted list of plants). Both the Cart and the FinalFilter also contain their own components. The FinalFilter contains the Plant component (renders each card), and the Cart contains CartItem (which is the two buttons, price, and name of an added cart item). 

### How Data is Passed Down Through Components
Data is passed down through components such as the FinalFilter and Plant or Cart and CartItem components using props. For each plant, FinalFilter passes down a list of attributes such as price to Plant using the syntax price={item.price}. Plant then accesses this information using props.price. The same is true for the Cart and CartItem components.

### How the User Triggers State Changes
The user triggers state changes by clicking buttons and changing the selected radio inputs. For example, when the user selects the "Small" radio input button, the size state is changed from "All" to "Small," which triggers all of the plants to be filtered such that only the plants with the "Small" size are displayed. The same logic applies for filtering by setting. Sorting is very similar in that changing from "Height" to "Price" will cause the plants to resort. 

Clicking the "Add to Cart" button will cause the Plant to which the button belongs to be added to the Cart aggregator. This happens because the button adds to the state of the plants and cart arrays which keep track of which items are in the cart and how many of them there are. When an item is added to the cart, the add and remove buttons appear. The user can change the state of the cart using these buttons which also update the cart and plants arrays. Whenever an item is added or removed to the cart, the total state updates the total price of items in the cart accordingly. 

