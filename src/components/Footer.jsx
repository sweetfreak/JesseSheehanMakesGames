const Footer = () => {
    return (
      <footer className="custom-footer">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} Jesse Sheehan Makes Games | Designed by Jesse, but he needed some help from AI</p>
          <div className="footer-links">
            <a href="https://github.com/sweetfreak" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/jessetsheehan/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;