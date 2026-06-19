const navbar = `
<nav class="navbar">
    <input type="checkbox" id="Sidebar-active">
    <label for="Sidebar-active" class="open-sidebar-btn">
        <img src="assets/menu_32dp_E3E3E3_FILL0_wght400_GRAD0_opsz40.svg" alt="">
    </label>
    <ul class="nav-links">
        <li><a href="Home.html">Home</a></li>
        <li><a href="Biograpy.html">Biography</a></li>
        <li><a href="Gallery.html">Memories</a></li>
        <li><a href="stories.html">Story</a></li>
        <li><a href="share.html">Share</a></li>
    </ul>
</nav>`;

const footer = `
<footer>
    <div class="footer">
        <a href="https://memorial-admin-panel.vercel.app/login" 
           style="color: inherit; text-decoration: none; cursor: default;">
            <p>In loving memory of Mr.Urgessa</p>
        </a>
    </div>
</footer>`;
document.getElementById('navbar').innerHTML = navbar;
document.getElementById('footer').innerHTML = footer;