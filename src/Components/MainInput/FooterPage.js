import React from "react";
import {MDBCol, MDBContainer, MDBRow, MDBFooter} from "mdbreact";

const FooterPage = () => {
    return (
        <MDBFooter color="blue">
            <MDBContainer fluid>
                <MDBRow className='footer'>
                    <MDBCol md="4">
                        <h2 className="title">NNT-Solution</h2>
                        <p>
                            NNT Solution is professional company working on Information Technology.
                        </p>
                    </MDBCol>
                    <MDBCol>
                        <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/itSolution.jpg'})`}}>
                            <h5>Links</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdznU-cIF06pNQ2mNsU3D1yo0V5hgWKQhhI8IzUiQgrgEcQag/viewform">Liên Hệ Đặt Hàng</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Our Company</a>
                                </li>
                                <li>
                                    <a href="#!">Our Products</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Our Resources</a>
                                </li>
                            </ul>
                            &copy; {new Date().getFullYear()} Copyright: <a href="https://docs.google.com/forms/d/e/1FAIpQLSdznU-cIF06pNQ2mNsU3D1yo0V5hgWKQhhI8IzUiQgrgEcQag/viewform"> NNT
                            Expand</a>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </MDBFooter>
    );
}

export default FooterPage;
