import React from 'react'
import Footer from './Footer'
import Icons from '../../assets/icons/icons'

export function FooterContainer() {
  return (
    <Footer>
        <Footer.Wrapper>
            <Footer.Row>
                
                    <Footer.Text>Sen-Gen Education</Footer.Text>
                  
                <Footer.Column>
                    <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Courses</Footer.Link>
                    <Footer.Link href="#">Top Universities</Footer.Link>
                    <Footer.Link href="#">Reviews </Footer.Link>
                </Footer.Column>
                
                <Footer.Column>
                    <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#"><Icons className="fa-solid fa-envelope" />Email</Footer.Link>
                    <Footer.Link href="#"><Icons className="fa-solid fa-phone" />Call</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Title>Social Media</Footer.Title>
                    <Footer.Link href="#"><Icons className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icons className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icons className="fab fa-twitter" />Twitter</Footer.Link>
                    <Footer.Link href="#"><Icons className="fab fa-youtube" />Youtube</Footer.Link>
                </Footer.Column>
            </Footer.Row>
        </Footer.Wrapper>
    </Footer>
  )
}