import { socialLinks, pageLinks } from "../data"
const Footer = () => {
    return (
        <>
          <footer className="section footer">
                <ul className="footer-links">
                    {pageLinks.map((pagelink)=>{
                        return (
                            <li>
                                <a href={pagelink.href} className="footer-link">{pagelink.text}</a>
                            </li>
                        )
                    })}
                   
                </ul>
                <ul className="footer-icons">
                    {socialLinks.map((socialLink)=>{
                        return(
                            <li>
                                <a href={socialLink.href} target="_blank" rel="noreferrer" className="footer-icon"
                                    ><i className={socialLink.icon}></i
                                ></a>
                            </li> 
                        )      
                    })}
                </ul>
                <p className="copyright">
                    copyright &copy; Backroads travel tours company
                    <span id="date"></span> all rights reserved
                </p>
            </footer>
        </>
    )
}

export default Footer