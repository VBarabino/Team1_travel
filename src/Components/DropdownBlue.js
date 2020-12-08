import React,{ useState , useContext } from 'react'
import  {DataContext} from '../Context/DataContext'
import '../index.css'

const DropdownBlue = ({ title , item }) => {
    const [open,setOpen] = useState(false)
    const toggle = () => setOpen(!open)


    return (
        <div className="dropdown-wrapper card">
            <div className="dropdown-header" role="button" onClick={() => toggle(!open)}>
                <div className="dropdown-header-title">
                    <p className="dropdown-header-title2">
                        {title}
                    </p>

                </div>
                <div className="dropdown-header-action">
                    <p>{open ?  <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}</p>

                </div>

            </div>
            {open && (
                <p className="dropdown-list small-text">
                    {item}
                    

                </p>
            )}
            
        </div>
    )
}

export default DropdownBlue
