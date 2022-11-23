const navbar = document.querySelector('.navbar')

const createNavbar = () => {
    navbar.innerHTML +=
    `
    <ul class = "links-container">
        <li class="link-item">
            <a href="#" class="link">home</a>
        </li>
        <li class="link-item">
            <a href="#" class="link">product</a>
        </li>
        <li class="link-item">
            <a href="#" class="link">about</a>
        </li>
        <li class="link-item">
            <a href="#" class="link">contact</a>
        </li>
    </ul>
    <div class="user-interactions">
        <div class="user">
            <img src="./img/user.png" class="user.icon">
            <div class="user-icon-popup">
            <p>Login to your account</p>
            <a>Login</a>
            </div>
        </div> 
    </div>
    `
}

createNavbar()