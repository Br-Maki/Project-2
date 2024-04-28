var Product = require ('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://alomariabdo1:Hello1234@CS351alomari.y6ul7h3.mongodb.net/?retryWrites=true&w=majority');

var products = [
    new Product({
        imagePath: '/stylesheets/images/hoodie.jpg', 
        title: 'Zip-up Hoodie', 
        description: 'EcoSmart mid-weight cotton/poly fleece with up to 5% of the poly fibers.', 
        price: 1999
    }),
    new Product({
        imagePath: '/stylesheets/images/shirt.jpg', 
        title: "Women's Long Sleeve", 
        description: 'This long sleeve going out top is made of 88% polyester and 12% spandex.Light weight, super soft and high-stretch fabric with a second-skin feel.', 
        price: 1499
    }),
    new Product({
        imagePath: '/stylesheets/images/pants.jpg', 
        title: "Men's Cargo Pants", 
        description: 'Mens cargo pants made of premium fabric, 95% Cotton & 5% Spandex.Durable & Comfortable,Lightweight,breathable fabric great for everyday wear.', 
        price: 2689
    }),
    new Product({
        imagePath: '/stylesheets/images/shoes.jpg', 
        title: "Women's Platform Shoes", 
        description: 'Adidas Originals female sneaker.', 
        price: 5999
    }),
    new Product({
        imagePath: '/stylesheets/images/socks.jpg', 
        title: '5-Pair Wool Socks', 
        description: 'These winter socks are very warm, they can keep your feet warm in cold weather.', 
        price: 1789
    }),
    new Product({
        imagePath: '/stylesheets/images/futon.jpg', 
        title: 'Linen Modern Futon', 
        description: 'Perfect for any occasion, three backrest settings let you enjoy meaningful conversations, watch a long-awaited sports event, or even count sheep in a peaceful slumber .', 
        price: 18999
    }),
    new Product({
        imagePath: '/stylesheets/images/stand.jpg', 
        title: '60 Inch TV Stand', 
        description: 'Entertainment Center with Storage Cabinet, Mid Century Modern Media Console Table, Adjustable Hinge, Wooden Television Furniture for Living Room, Office, Retro Brown.', 
        price: 5999
    }),
    new Product({
        imagePath: '/stylesheets/images/dresser.jpg', 
        title: 'Bedroom Dresser', 
        description: '5 Drawers, Wide Chest of Drawers, Fabric Dresser, Storage Organizer Unit with Fabric Bins for Closet, Living Room, Hallway, Rustic Brown Wood Grain Print.', 
        price: 4999
    }),
    new Product({
        imagePath: '/stylesheets/images/dresser2.jpg', 
        title: 'White Dresser', 
        description: '5 Drawers, Vertical Storage Tower Fabric Dresser for Bedroom, Hallway, Entryway, Nursery, Closet Organizer, Nightstand Bedside Table Furniture, Sturdy Steel Frame, Wood Top.', 
        price: 5919
    }),
    new Product({
        imagePath: '/stylesheets/images/dresser3.jpg', 
        title: 'Storage Dresser', 
        description: '5 Organizer Closet Chest Small Clothes Fabric Cabinet, Kids Furniture Drawer Binis, Nightstand for Bedroom, Living Room, Nursery, Entryway, Grey.', 
        price: 3399
    }),
    new Product({
        imagePath: '/stylesheets/images/bracelet.jpg', 
        title: 'Gold Plated Bracelet', 
        description: '18K Gold Plated Clover Lucky Bracelet for Women White/Black/Red/Green Bracelets Cute Link Bracelets Jewelry Gifts Trendy for Women Girls.', 
        price: 1398
    }),
    new Product({
        imagePath: '/stylesheets/images/necklace2.jpg', 
        title: 'Gold Plated Necklace', 
        description: '14K Gold Plated Cross Necklace for Women | Cross Pendant | Gold Necklaces for Women.', 
        price: 1299
    }),
    new Product({
        imagePath: '/stylesheets/images/necklace.jpg', 
        title: 'Dainty Gold Necklace', 
        description: '14K Solid Gold OverNecklaces for Women Cute Hexagon Letter Initial Necklaces for Women Teen Girls Gold Layered Necklaces for Women Jewelry Gifts.', 
        price: 1499
    }),
    new Product({
        imagePath: '/stylesheets/images/set.jpg', 
        title: 'Gold Jewelry Set', 
        description: '46 Pcs Gold Jewelry Set with 11Pcs Necklace, 11 Pcs anklet and 18 Pcs Earring Ear Cuff,6Hoop Earrings for Women Girls, Fashion Indie Costume Jewerly Pack for Friendship Party Gift.', 
        price: 1690
    }),
    new  Product({
        imagePath: '/stylesheets/images/earrings.jpg', 
        title: '6 Pair Gold Earrings', 
        description: 'Gold Hoop Earrings for Women Lightweight Chunky Hoop Earrings Multipack Hypoallergenic, Thick Open Twisted Huggie Hoops Earring Set Jewelry for Gifts.', 
        price: 1097
    }),
    new Product({
        imagePath: '/stylesheets/images/tiles.jpg', 
        title: 'Magnetic Tiles', 
        description: 'Gemmicc Magnetic Tiles Building Blocks for Kids, STEM Approved Educational Toys,3D Magnet Puzzles Stacking Blocks for Boys Girls,100 PCS Advanced Set with 2 Cars.', 
        price: 4999
    }),
    new Product({
        imagePath: '/stylesheets/images/plushie.jpg', 
        title: 'Plushie', 
        description: 'Plush Crawling Toy Cat - Interactive Plush Cat – Stuffed Animal – Washable Tummy Time Meowing Plush Toy with Movement & Sounds- Toys for Babies, Toddlers – 1 Year.', 
        price: 499
    }),
    new Product({
        imagePath: '/stylesheets/images/cactus.jpg', 
        title: 'Dancing Cactus', 
        description: 'Dancing Cactus Mimicking Toy,Talking Repeat Singing Sunny Cactus Toy 120 Pcs Songs for Baby 15S Record Your Sound Sing+Dancing+Recording+LED.', 
        price: 1999
    }),
    new Product({
        imagePath: '/stylesheets/images/oven.jpg', 
        title: 'Toy Oven', 
        description: 'Mix & Make a Plush Best Friend! Place Your Dough in The Oven and Be Amazed When A Warm, Scented, Interactive, Friend Comes Out! Which Will You Make?', 
        price: 2997
    }),
    new Product({
        imagePath: '/stylesheets/images/fidget.jpg', 
        title: 'Fidget Toy Set', 
        description: '110 Pack Fidget Toys Set,Pop Sensory Party Favors Gifts for Kids Adults Boy Girl ADHD Autism Stress Relief Stocking Stuffers Autistic Bulk Goodie Bag Pinata Filler Treasure Box Classroom Prizes School.', 
        price: 1909
    }),
    new Product({
        imagePath: '/stylesheets/images/phone.jpg', 
        title: 'Compact Cordless Phone', 
        description: 'Compact Cordless Phone with DECT 6.0, 1.6" Amber LCD and Illuminated HS Keypad, Call Block, Caller ID, Multiple Display Languages - 1 Handset - KX-TGB810S.', 
        price: 2199
    }),
    new Product({
        imagePath: '/stylesheets/images/computer.jpg', 
        title: 'Desktop PC', 
        description: 'Desktop PC Computer Intel Core i5 3.1-GHz, 8 gb Ram, 1 TB Hard Drive, DVDRW, 19 Inch LCD Monitor, Keyboard, Mouse, Wireless WiFi, Windows 10.', 
        price: 19999
    }),
    new Product({
        imagePath: '/stylesheets/images/switch.jpg', 
        title: 'Nintendo Switch', 
        description: 'Nintendo Switch – OLED Model w/ Neon Red & Neon Blue Joy-Con.', 
        price: 34999
    }),
    new Product({
        imagePath: '/stylesheets/images/plug.jpg', 
        title: 'Surge Protector', 
        description: 'Multi Plug Outlet Extender with Night Light for Home, Office, School, Addtam 5-Outlet Splitter and 4 USB Ports(1 USB C), Wall Charger Power Strip, ETL Listed.', 
        price: 1389
    }),
    new Product({
        imagePath: '/stylesheets/images/techStand.jpg', 
        title: 'Headphone Stand', 
        description: 'Headphone Stand with USB Charger Under Desk Headset Holder Mount with 3 Port USB Charging Station,iWatch Stand Smart Watch Charging Dock Dual Earphone Hanger Hook,PC Accessories Gifts,UL Tested.', 
        price: 1799
    })
    ];
var promises = [];

products.forEach(product => {
    promises.push(product.save()); // Save each product and store the promise
});

// Wait for all promises to resolve
Promise.all(promises)
    .then(() => {
        console.log('All products saved successfully');
        mongoose.disconnect(); // Disconnect from the database
    })
    .catch(err => {
        console.error('Error saving products:', err);
        mongoose.disconnect(); // Disconnect from the database in case of error
    });
