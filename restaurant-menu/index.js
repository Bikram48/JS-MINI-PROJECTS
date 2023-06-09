const items = [
    {
        pic: 'item-1.jpeg',
        title: "Buttermilk Pancakes",
        category: 'breakfast',
        price: 15.99,
        description: 'I\'m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed'
    },
    {
        pic: 'item-2.jpeg',
        title: "Diner Double",
        category: 'lunch',
        price: 13.99,
        description: 'vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats'
    },
    {
        pic: 'item-3.jpeg',
        title: "Godzilla Milkshake",
        category: 'shakes',
        price: 6.99,
        description: 'ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.'
    },
    {
        pic: 'item-4.jpeg',
        title: "Country Delight",
        category: 'breakfast',
        price: 20.99,
        description: 'Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,'
    },
    {
        pic: 'item-5.jpeg',
        title: "Egg Attack",
        category: 'lunch',
        price: 22.99,
        description: 'franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90\'s pop-up'
    },
    {
        pic: 'item-6.jpeg',
        title: "Oreo Dream",
        category: 'shakes',
        price: 18.99,
        description: 'Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday'
    },
    {
        pic: 'item-7.jpeg',
        title: "Bacon Overflow",
        category: 'breakfast',
        price: 8.99,
        description: 'carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird'
    },
    {
        pic: 'item-8.jpeg',
        title: "American Classic",
        category: 'lunch',
        price: 12.99,
        description: 'on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut'
    },
    {
        pic: 'item-9.jpeg',
        title: "Quarantine Buddy",
        category: 'shakes',
        price: 16.99,
        description: 'skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.'
    },
    {
        pic: 'item-10.jpeg',
        title: "Steak Dinner",
        category: 'dinner',
        price: 39.99,
        description: 'skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.'
    }
]

const menu = document.querySelector('.menu-items')
const categories = document.querySelectorAll('button')

displayItems(items)
function displayItems(items) {
    const foods = items.map((value)=> {
        return ` <div class="item">
        <div class="pic">
            <img src="./images/${value.pic}" alt="">
        </div>
        <div class="item-description">
            <h4 class="title">${value.title}</h4>
            <p class="price">$${value.price}</p>
            <p class="description">
                ${value.description}
            </p>
        </div>
    </div>`
    })

    foods.forEach(food => {
        menu.innerHTML += food
    })
}

categories.forEach(category=>{
    category.onclick=(e) => {
        filter_items(e.target.getAttribute('data-category'))
    }
})

function filter_items(category) {
    menu.innerHTML=""
    const filtered_items = items.filter(item =>{
        return item.category==category
    })

    if(category=='all') {
        displayItems(items)
    } else {
        displayItems(filtered_items)
    }
}
