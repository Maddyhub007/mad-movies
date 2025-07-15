

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-md fixed-top bg-primary navbar-dark">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand"><i class="bi bi-film"></i> Mad Movies</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="/movies/top" className="nav-link">Top Rated</a></li>
            <li className="nav-item"><a href="/movies/popular" className="nav-link">Popular</a></li>
            <li className="nav-item"><a href="/movies/upcoming" className="nav-link">Upcoming</a></li>
          </ul>
          <form action="#">
            <input type="search" className="form-control" placeholder="Search" />
          </form>
        </div>
      </div>
    </nav>
  )
}

