/************************** Import library/fungsi ****************************/
import React from 'react'

//terkait routing (buka comment Link jika perlu <Link />)
//import { Link } from 'react-router-dom'
import { logout } from '../utils/xhr'

//modul-modul Bootstrap
import Button from 'react-bootstrap/Button'

/************************ Deklarasi objek/variabel ***************************/

/************************ Deklarasi kelas/komponen ***************************/
const LogoutPage = ({ history }) => (
    <div>
      <h1 className="centeredH1">Logout Page</h1>
      <div className="text-center">
        <p>
          Apakah anda yakin ingin Logout?
        </p>
        
        <Button onClick={() => {
          logout().then(() => {
              history.push('/auth')
          })
        }}>Logout</Button>
      </div>
    </div>
  )
  
  export default LogoutPage