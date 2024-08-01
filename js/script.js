let loginForm = document.querySelector('.header .login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
}

window.onscroll = () => {
    loginForm.classList.remove('active');
    navbar.classList.remove('active');

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
}

window.onload = () => {
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
}

//add button alert
document.getElementById('btnAdd').onclick = () => {
    var modal = document.getElementById("modal");
    modal.style.display = 'none';
    confirm('Added to cart');
}

document.getElementById('btnAdd2').onclick = () => {
    var modal2 = document.getElementById("modal2");
    modal2.style.display = 'none';
    confirm('Added to cart');
}

document.getElementById('btnAdd3').onclick = () => {
    var modal3 = document.getElementById("modal3");
    modal3.style.display = 'none';
    confirm('Added to cart');
}

document.getElementById('btnAdd4').onclick = () => {
    var modal4 = document.getElementById("modal4");
    modal4.style.display = 'none';
    confirm('Added to cart');
}

document.getElementById('btnAdd5').onclick = () => {
    var modal5 = document.getElementById("modal5");
    modal5.style.display = 'none';
    confirm('Added to cart');
}

document.getElementById('btnAdd6').onclick = () => {
    var modal6 = document.getElementById("modal6");
    modal6.style.display = 'none';
    confirm('Added to cart');
}

// Heart icon button script
const heartButtons = document.querySelectorAll('.fas.fa-heart');

heartButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        // Get the modal element
        var modal = document.getElementById("serviceModal");
        // Display the modal
        modal.style.display = "block";
    });
});

// Eye icon button script
const eyeButtons = document.querySelectorAll('.fas.fa-eye');

eyeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        // Get the modal element
        var modal = document.getElementById("serviceModal");
        // Display the modal
        modal.style.display = "block";
    });
});

// Close button script
var closeButtons = document.querySelectorAll('.modal .close');

closeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        // Get the modal element
        var modal = document.getElementById("serviceModal");
        // Hide the modal
        modal.style.display = 'none';
    });
});


//plan button script
const planButton = document.querySelectorAll('.btnPlan');

planButton.forEach(function (btn) {
    btn.addEventListener('click', function () {
        // Get the modal element
        var modal = document.getElementById("planModal");
        // Display the modal
        modal.style.display = "block";
    });
});

var span = document.querySelector('.planModal .close');

span.onclick = function () {
    // Get the modal element
    var modal = document.getElementById("planModal");
    // Hide the modal
    modal.style.display = 'none';
};

//services button script
const serviceButton = document.querySelectorAll('.serviceBtn');

serviceButton.forEach(function (btn) {
    btn.addEventListener('click', function () {
        // Get the modal element
        var modal = document.getElementById("serviceModal");
        // Display the modal
        modal.style.display = "block";
    });
});

var span = document.querySelector('.serviceModal .close');

span.onclick = function () {
    // Get the modal element
    var modal = document.getElementById("serviceModal");
    // Hide the modal
    modal.style.display = 'none';
};


// Get the elements by their IDs
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    //from modal of the products
    var productNameElement = document.getElementById("productName");
    var productDescriptionElement = document.getElementById("productDescription");
    var productPriceElement = document.getElementById("productPrice");

    // Get the content of each element
    var productName = productNameElement.textContent.trim();
    var productDescription = productDescriptionElement.textContent.trim();
    var productPrice = productPriceElement.textContent.trim();

    // Create a JavaScript object with the extracted data   
    var productData = {
        productName: productName,
        productDescription: productDescription,
        productPrice: productPrice
    };

    // Send the product data to your server using fetch API
    fetch('/add-product', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Product added successfully:', data);
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });


    //FROM THE MESSAGE SECTION OF THE LANDING PAGE
    var userName = document.getElementById("name").value.trim();
    var userEmail = document.getElementById("email").value.trim();
    var userPhoneNumber = document.getElementById("phoneNum").value.trim();
    var userMessage = document.getElementById("userMessage").value.trim();

    // Create a JavaScript object with the extracted data
    var userMessageData = {
        userName: userName,
        userEmail: userEmail,
        userPhoneNumber: userPhoneNumber,
        userMessage: userMessage
    };

    // Send the data to the server using fetch API
    fetch('/add-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userMessageData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Message added successfully', data);
            // Optionally, you can display a success message to the user here
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
            // Optionally, you can display an error message to the user here
        });
});


// Add to cart button 1
const addToCartBtn1 = document.querySelector('#addToCartBtn1');

addToCartBtn1.addEventListener('click', function () {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
});

// Get the close button inside the modal 1
var span = document.querySelector('.modal .close');

span.onclick = function () {
    var modal = document.getElementById("modal");
    modal.style.display = 'none';
};

// Add to cart button 2
const addToCartBtn2 = document.querySelector('#addToCartBtn2');

addToCartBtn2.addEventListener('click', function () {
    var modal = document.getElementById("modal2");
    modal.style.display = "block";
});

var span = document.querySelector('.modal2 .close');

span.onclick = function () {
    var modal = document.getElementById("modal2");
    modal.style.display = 'none';
};

// Add to cart button 3
const addToCartBtn3 = document.querySelector('#addToCartBtn3');

addToCartBtn3.addEventListener('click', function () {
    var modal = document.getElementById("modal3");
    modal.style.display = "block";
});

// Get the close button inside the modal 3
var span = document.querySelector('.modal3 .close');

span.onclick = function () {
    var modal = document.getElementById("modal3");
    modal.style.display = 'none';
};

// Add to cart button 4
const addToCartBtn4 = document.querySelector('#addToCartBtn4');

addToCartBtn4.addEventListener('click', function () {
    var modal = document.getElementById("modal4");
    modal.style.display = "block";
});

// Get the close button inside the modal 4
var span = document.querySelector('.modal4 .close');

span.onclick = function () {
    var modal = document.getElementById("modal4");
    modal.style.display = 'none';
};

// Add to cart button 5
const addToCartBtn5 = document.querySelector('#addToCartBtn5');

addToCartBtn5.addEventListener('click', function () {
    var modal = document.getElementById("modal5");
    modal.style.display = "block";
});

// Get the close button inside the modal 5
var span = document.querySelector('.modal5 .close');

span.onclick = function () {
    var modal = document.getElementById("modal5");
    modal.style.display = 'none';
};

// Add to cart button 6
const addToCartBtn6 = document.querySelector('#addToCartBtn6');

addToCartBtn6.addEventListener('click', function () {
    var modal = document.getElementById("modal6");
    modal.style.display = "block";
});

// Get the close button inside the modal 6
var span = document.querySelector('.modal6 .close');

span.onclick = function () {
    var modal = document.getElementById("modal6");
    modal.style.display = 'none';
};

// Get the close button inside the modal 2
var span2 = document.querySelector('.modal2 .close');

span2.onclick = function () {
    var modal = document.getElementById("modal2");
    modal.style.display = 'none';
};

// Add functionality for "Add to Cart" button in modal 1
document.getElementById('btnAdd1').onclick = () => {
    var modal = document.getElementById("modal");
    modal.style.display = 'none';
    alert('Added to cart');
};

// Add functionality for "Add to Cart" button in modal 2
document.getElementById('btnAdd2').onclick = () => {
    var modal = document.getElementById("modal2");
    modal.style.display = 'none';
    alert('Added to cart');
};

// Add functionality for "Add to Cart" button in modal 3
document.getElementById('btnAdd2').onclick = () => {
    var modal = document.getElementById("modal3");
    modal.style.display = 'none';
    alert('Added to cart');
};

// Add functionality for "Add to Cart" button in modal 4
document.getElementById('btnAdd2').onclick = () => {
    var modal = document.getElementById("modal4");
    modal.style.display = 'none';
    alert('Added to cart');
};

// Add functionality for "Add to Cart" button in modal 5
document.getElementById('btnAdd2').onclick = () => {
    var modal = document.getElementById("modal5");
    modal.style.display = 'none';
    alert('Added to cart');
};

// Add functionality for "Add to Cart" button in modal 6
document.getElementById('btnAdd2').onclick = () => {
    var modal = document.getElementById("modal6");
    modal.style.display = 'none';
    alert('Added to cart');
};

