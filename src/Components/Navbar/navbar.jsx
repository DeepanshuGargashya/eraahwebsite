import './style.scss'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import EraahLogo from '../../Assets/eraahLogo.png'

function CustomNavbar(){
    const [opened, setOpened] = useState(false);
  
    const handleOpen = () => setOpened(true);
    const handleClose = () => setOpened(false);
    const location = useLocation();

    const [color, setColor] = useState(''); 

    
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior:'smooth' });
        }
      }
    // const Close = () => setClick(false);
    function scrollToUpward(color){
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // const Close = () => setClick(false);
    // function scrollToUpward(color){
    //     if(color==='Home'){
    //         window.scrollTo({ top: 0, behavior: 'smooth' });
    //         setColor('Home')
    //     }
    //     else if(color==='About us'){
    //         window.scrollTo({ top: 0, behavior: 'smooth' });
    //         setColor('About us')
    //     }
    //     if(color==='Team'){
    //         window.scrollTo({ top: 0, behavior: 'smooth' });
    //         setColor('Team')
    //     }
    //     if(color==='Book A Free consultant'){
    //         window.scrollTo({ top: 0, behavior: 'smooth' });
    //         setColor('Book A Free consultant')
    //     }
    // }

    function handleToggle(){

        handleClose();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    return (
        <div className="navbar-area mb-5">
        <div className="container-fluid d-flex flex-row justify-content-between align-items-center">
            <div className="navbar-brand" >
                   <NavLink to={'/'}> <img className='navbar-brand-img' src={EraahLogo} alt="" width={"80%"}/></NavLink>

                </div>
            <div className="navItems">
                <li ><NavLink className={`links ${location.pathname=== '/'? 'active' : ''}`} to={'/'} onClick={()=> scrollToUpward('Home')} >Home</NavLink></li>

                <li><NavLink className={`links ${location.pathname=== '/works'? 'active' : ''}`} to={'/works'} onClick={()=> scrollToUpward('Works')}>How It Works</NavLink></li>

                <li><NavLink className={`links ${location.pathname=== '/blog'? 'active' : ''}`} to={'/blog'} onClick={()=> scrollToUpward('Blog')}>Blog</NavLink></li>
            
               <li> <NavLink className={`links ${location.pathname=== '/donate'? 'active' : ''}`} to={'/donate'} onClick={()=> scrollToUpward('Donate')}> <button type="button" className="btn">Donate</button></NavLink></li>

                <li><NavLink className={`links ${location.pathname=== '/logIn'? 'active' : ''}`} to={'/logIn'} onClick={scrollToUpward('')}>Log in</NavLink></li>
            </div> 
            <div className="nav-toggler-icon" onClick={handleOpen}>
                <GiHamburgerMenu className='hamIcon' />
            </div>
            <div id='customSidebar' className={opened?"custom-sidebar show":"custom-sidebar"}>
                <div className="close-btn-wrapper">
                    <AiOutlineClose className='close-icon' onClick={handleClose} />
                </div>
                <ul className='sidebar-list'>
                    <li><NavLink to={'/'} onClick={handleToggle}>Home</NavLink></li>
                    <li><NavLink to={'/works'} onClick={handleToggle}>How It Works</NavLink></li>
                    <li><NavLink to={'/blog'} onClick={handleToggle}>Blog</NavLink></li>
                    
                    {/* <li><NavLink to={""}>Expertise</NavLink></li>
                <li><NavLink to={""}>Investment  Strategy</NavLink></li> */}
                    
                <li><NavLink to={'/donate'} onClick={handleToggle}>Donate</NavLink></li>
                {/* <li><NavLink to={'/donate'} onClick={handleToggle}><button type="button" class="btn">Donate</button></NavLink></li> */}
                <li><NavLink to={'/logIn'} onClick={handleToggle}>Log In</NavLink></li>
                </ul>
            </div>
        </div>
        </div>
    );
  }

export default CustomNavbar