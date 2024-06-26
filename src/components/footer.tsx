import Image from "next/image";
import Link from 'next/link'
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

import linkedin from "../../public/images/LinkedIn.svg";
import facebook from "../../public/images/Facebook.svg";
import github from "../../public/images/Github.svg"

const Footer = () => {
    const current_year = new Date().getFullYear();
    return (
        <div className="container-fluid pt-3 bg-dark">
            <div className="row">
                {/* Links */}
                <div className="col">
                    <div className="footer-nav px-4">
                        <Link href="/">Crowd Comic</Link>
                        <></>
                        <ul className="footer-nav-list">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/team" >Team</Link></li>
                            <li><Link href="/comic">Comic</Link></li>
                        </ul>
                    </div>
                </div>
                {/* /Links */}

                {/* Socials */}
                <div className="col">
                    <ul className="social">
                        <li>
                            <Link href="">
                                    <div className="icondiv">
                                        <Image className="iconcolor" src={linkedin} alt="" fill={true} />
                                    </div>
                            </Link>
                        </li>

                        <li>
                            <Link href="">
                                <div className="icondiv">
                                    <Image className="iconcolor" src={facebook} alt="" fill={true} />
                                </div>
                            </Link>
                        </li>


                        <li>
                            <Link href="">
                                <div className="icondiv">
                                    <Image className="iconcolor" src={github} alt="" fill={true} />
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* /Socials */}
            </div>
            <div className='row'>
                <p className='copyright'>Copyright © {current_year}</p>  
            </div>
        </div>  
    )
}

export default Footer;