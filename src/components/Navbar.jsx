const Navbar = ({setCategory}) => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark border-bottom border-body" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand badge text-bg-success fs-4" href="#">News<span>Api</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <div class="nav-link" onClick={()=>setCategory('business')}>Business</div>
        </li>
        <li class="nav-item">
          <div class="nav-link" onClick={()=>setCategory('health')}>Health</div>
        </li>
        <li class="nav-item">
          <div class="nav-link" onClick={()=>setCategory('technology')}>Technology</div>
        </li>
        <li class="nav-item">
          <div class="nav-link" onClick={()=>setCategory('sports')}>Sports</div>
        </li>
        <li class="nav-item">
          <div class="nav-link" onClick={()=>setCategory('entertaiment')}>Entertaiment</div>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar