import style from './NavBar.module.css'
import SearchBar from '../SearchBar/SearchBar'
import {NavLink} from 'react-router-dom'
import ROUTES from '../../helpers/routes.helpers'



export default function NavBar({onSearch,randomChar,logOut}){

    return(
    <div className={style.contenedorNavBar}>
        <div className={style.divLogo} ><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/800px-Rick_and_Morty.svg.png?20220319060844' alt='tukis' /> </div>
                <NavLink className={style.boton} to={ROUTES.FAVORITES}><span>Favorites</span></NavLink>
            <SearchBar onSearch={onSearch} randomChar={randomChar}/>
        <div className={style.links}>
                <NavLink className={style.boton} to={ROUTES.ABOUT}><span>About</span></NavLink>
                <NavLink className={style.boton} to={ROUTES.HOME}><span>Home</span></NavLink>
                <button className={style.boton} onClick={logOut} >LogOut</button>
        </div>
    </div>
    )
}