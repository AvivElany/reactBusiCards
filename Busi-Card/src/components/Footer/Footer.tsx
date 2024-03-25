import './Footer.css'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaRegCopyright } from 'react-icons/fa6'
import Logo from '../Logo/Logo'

export default function Footer() {
  return (
    <div className='Footer'>
      <footer className='border-top pt-4'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div>
                <Logo />
                <p className="mb-30 footer-desc pt-2">
                  We know it's tough, Busi-Card is a company dedicated to helping small business owners just like you connect with the right clients.
                </p>
                <p>
                  Copyright <FaRegCopyright /> Busi-Card, <b>{(new Date().getFullYear())}</b> All rights reserved.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div>
                <h4>Services</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" target='blank' className="text-decoration-none">Marketing</a>
                  </li>
                  <li>
                    <a href="#" target='blank' className="text-decoration-none">Branding</a>
                  </li>
                  <li>
                    <a href="#" target='blank' className="text-decoration-none">Web Design</a>
                  </li>
                  <li>
                    <a href="#" target='blank' className="text-decoration-none">Business Consulting</a>
                  </li>
                  <li>
                    <a href="#" target='blank' className="text-decoration-none">Graphics Design</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6">
              <div>
                <h4>Social Media</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="https://github.com/AvivElany" target='blank' className="text-decoration-none">
                      <span><FaGithub size={15} className='SocialMediaIcon'/>&nbsp;</span>
                      Personal GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/AvivElany/" target='blank' className="text-decoration-none">
                      <span><FaFacebook size={15} className='SocialMediaIcon'/>&nbsp;</span>
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/AvivElany/" target='blank' className="text-decoration-none">
                      <span><FaInstagram size={15} className='SocialMediaIcon'/>&nbsp;</span>
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/avivelany/" target='blank' className="text-decoration-none">
                      <span><FaLinkedinIn size={15} className='SocialMediaIcon'/>&nbsp;</span>
                      Linked In
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-8 mx-auto">
              <div>
                <h4>Newsletter</h4>
                <div>
                  <label htmlFor="Newsletter" className="form-label">Subscribe To Our Newsletter</label>
                  <div className='d-flex'>
                    <input type="text" className="form-control form-control-sm me-2" placeholder="Enter Your Email" />
                    <button className="btn btn-sm btn-info">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
