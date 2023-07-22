// import styled from 'styled-components/macro'
import styled from 'styled-components';


const Main = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
font-family: 'Poppins', sans-serif;
`

const Contents = styled.div`
height: 80px
`
const Nav = styled.div`
height: 80px;
    position: relative;
    z-index: z-nav;`

const Nav_content = styled.div`
    height: inherit;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);`

const Navbar = styled.div`
-webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: white;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0 32px;
    position: relative;
    -webkit-transition: -webkit-transform .25s ease-in-out;
    transition: -webkit-transform .25s ease-in-out;
    transition: transform .25s ease-in-out;
    transition: transform .25s ease-in-out,-webkit-transform .25s ease-in-out;
    will-change: transform;
    z-index: var(--z-nav-bar);
    `

const Span = styled.div`
display:inline-block;
width: 140px;
height: 32px;
background-repeat: no-repeat;
background-position: 0px 50%;
background-size: contain;
background-image: url(https://s3.resume.io/uploads/country/logo_default/2/for-light-bg.svg);
    vertical-align: middle;
`

const Navbar_menu = styled.div`
-webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
`

const Navbar_link = styled.div`
-webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: neutral-90;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 80px;
    padding: 0 16px;
    -webkit-transition: color .15s;
    transition: color .15s;
`
const Navbar_separator = styled.div`
background-color:#d9deeb;
    height: 16px;
    margin-left: 24px;
    margin-right: 70px;
    width: 1px;
`

const Navbar_auth = styled.div`
-webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    `

const Button_ghost = styled.div`
    background-color: initial;
    border: 1px solid var(--blue-50);
    color: var(--blue-50);
    padding: 13px 23px;
`
const Button = styled.div`
 -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: var(--blue-50);
    border-radius: 4px;
    border-width: 0;
    color: var(--white);
    cursor: pointer;
    display: inline-block;
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    outline: none;
    padding: 14px 24px;
    text-align: center;
    -webkit-transition: background-color .1s,color .1s,-webkit-box-shadow .1s;
    transition: background-color .1s,color .1s,-webkit-box-shadow .1s;
    transition: background-color .1s,color .1s,box-shadow .1s;
    transition: background-color .1s,color .1s,box-shadow .1s,-webkit-box-shadow .1s;
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    user-select: none;
    `

const Navbar_sidebar = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;`

const Hoome = styled.div`
    background-color:white;`

const Home_hero = styled.div`
    padding: 0 44px;
    background-color:#eff2f9;
    overflow: hidden;
    position: relative;
    `

const Home_hero_container = styled.div`
-webkit-box-pack: justify;  
-ms-flex-pack: justify;
justify-content: space-between;
max-width: 100%;
padding: 32px 0 0;
    `

const Home_hero_main = styled.div`
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
width: 100%;
    `

const Home_hero_main_content = styled.div`
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
margin-bottom: 26px;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
width: 100%;
    `

const Home_hero_main_title = styled.div`
color: #0c264c;
font-size: 14px;
font-weight: 600;
letter-spacing: 1.8px;
line-height: 20px;
margin-bottom: 8px;
max-width: 740px;
text-align: center;
text-transform: uppercase;

    `

const Home_hero_title = styled.div`
    font-weight: 700;
    margin-bottom: 12px;
    font-size: 46px;
    line-height: 48px;
    max-width: 740px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
           `

const Home_hero_subtitle = styled.div`
font-size: 22px;
    line-height: 28px;
    margin-bottom: 24px;
    max-width: 600px;
    text-align: center;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    margin: 0;
    padding: 0;
`

const Home_hero_cta = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-flow: row nowrap;
flex-flow: row nowrap;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
`

const Home_hero_button = styled.div`
margin-right: 0;
margin-top:20px
`

const Home_hero_counter=styled.div`
display: block;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 16px;
    padding-left: 18px;
    position: relative;
`






const Home = () => {
    return (
        <Main>
            <Contents>
                <Nav>
                    <Nav_content>
                        <Navbar>
                            <a href="">
                                <Span></Span>
                            </a>
                            <Navbar_menu>
                                <Navbar_link> Resume
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" >
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.2 10.4l2.9-2.8L14.5 9l-4.3 4.2L6 9l1.4-1.4 2.8 2.8z"></path>
                                    </svg>

                                </Navbar_link>
                                <Navbar_link> <a>
                                    Cover Letter
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" >
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.2 10.4l2.9-2.8L14.5 9l-4.3 4.2L6 9l1.4-1.4 2.8 2.8z"></path>
                                    </svg>
                                </a>
                                </Navbar_link>
                                <Navbar_link> <a>Resume Letter
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" >
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.2 10.4l2.9-2.8L14.5 9l-4.3 4.2L6 9l1.4-1.4 2.8 2.8z"></path>
                                    </svg>
                                </a>
                                </Navbar_link>
                                <Navbar_link><a>Blog
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" >
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.2 10.4l2.9-2.8L14.5 9l-4.3 4.2L6 9l1.4-1.4 2.8 2.8z"></path>
                                    </svg>

                                </a>
                                </Navbar_link>
                                <Navbar_link> <a> FAQ
                                </a>

                                </Navbar_link>
                                <Navbar_separator />

                                <Navbar_auth>
                                    <button type="button" className="btn btn-outline-primary">My Account</button>

                                </Navbar_auth>
                            </Navbar_menu>
                        </Navbar>
                    </Nav_content>
                </Nav>
            </Contents>
            <Hoome>
                <Home_hero>
                    <Home_hero_container>
                        <Home_hero_main>
                            <Home_hero_main_content>
                                <Home_hero_main_title>
                                    {/* style={{ fontfamily: 'inherit', fontsize: 'inherit', fontweight: ' inherit', margin: '0', padding: '0' }} */}
                                    Online resume builder
                                </Home_hero_main_title>
                                <Home_hero_title>Only 2% of resumes make it past the first round. Be in the top 2%</Home_hero_title>
                                <Home_hero_subtitle>Use professional field-tested resume templates that follow
                                    the exact ‘resume rules’ employers look for. Easy to use and done within minutes
                                    - try now for free!</Home_hero_subtitle>
                                <Home_hero_cta>
                                    <Home_hero_button>
                                    <button type="button" className="btn btn-primary">Create My Resume</button>

                                    </Home_hero_button>
                                </Home_hero_cta>
                            </Home_hero_main_content>
                        </Home_hero_main>
                    </Home_hero_container>
                </Home_hero>
            </Hoome>




        </Main >
    );
}

export default Home;