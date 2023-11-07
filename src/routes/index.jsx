import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import {Login} from '../pages/login'
import { Register } from '../pages/register'
import { RLogin } from '../pages/rlogin'
import { Home } from '../pages/home'
import { EmailEnviado } from '../pages/rlogin/emailenv'
import { NewPassword } from '../pages/rlogin/redefsenha'
import { AddProduct } from '../pages/product/add'
import { ListProducts } from '../pages/product/list'
import { Profile } from '../pages/profile/index'
import { Cart } from '../pages/product/cart'
 
export const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route path='/login' exact element={<Login />} />
                <Route path='/register' exact element={<Register />} />
                <Route path='/rlogin' exact element={<RLogin />} />
                <Route path='/' exact element={<Home />} />
                <Route path='/mailsend' exact element={<EmailEnviado />} />
                <Route path='/resetpassword' exact element={<NewPassword />} />
                <Route path='/addproduct' exact element={<AddProduct />} />
                <Route path='/products' exact element={<ListProducts />} />
                <Route path='/profile' exact element={<Profile />} />
                <Route path='/cart' exact element={<Cart/>} />
            </Routes>
        </Router>
    )
}