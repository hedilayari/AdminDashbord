import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { userColumns , userRows} from '../../datasource';
import "./Datatable.scss"
import { Link } from 'react-router-dom';



export const Datatable = () => {
    const action= { field: "action", headerName: "Action", width: 200,renderCell:()=>{
        return(
            <div className="cellAction">
              <Link to="/users/test" style={{textDecoration:"none"}}><div className="viewButton">View</div></Link>
                

                <div className="deleteButton">Delete</div>
            </div>
        )
    } }
  return (
    <div className='datatable'> 
    <div className="dataTableTitle">
      Add New user
      <Link to="/users/new" style={{textDecoration:"none"}} className="link">
      Add New
      </Link>
    </div>
    <DataGrid
      rows={userRows}
      columns={userColumns.concat(action)}
      pageSize={9}
      checkboxSelection
      disableSelectionOnClick
    />
  </div>
  )
}
