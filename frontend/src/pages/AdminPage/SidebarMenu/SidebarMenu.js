import React, { useEffect } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { Grant } from '../../../constants/permissions'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined'
import { hasGrant } from '../../../utils/hasGrant'
import { CustomNavLink } from '../../../components/NavLink/NavLink'
import { getCategorySports } from '../../../store/categorySports/operations'

export const SidebarMenu = props => {
  const dispatch = useDispatch()
  useEffect(() => dispatch(getCategorySports()), [dispatch])
  const user = useSelector(state => state.users.currentUser)
  const category = useSelector(state => state.categorySports.categorySports)
  
  console.log(category)

  return (
    <div>

      {
        hasGrant(user, Grant.VIEW) &&
                    <CustomNavLink to={'/football'}>
                      <ListItem button alignItems={'center'}>
                        <ListItemIcon>
                          <DescriptionOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'Football'}/>
                      </ListItem>
                    </CustomNavLink>
      }

      {
        hasGrant(user, Grant.VIEW) &&
          <CustomNavLink to={'/basketball'}>
            <ListItem button alignItems={'center'}>
              <ListItemIcon>
                <DescriptionOutlinedIcon/>
              </ListItemIcon>
              <ListItemText primary={'Basketball'}/>
            </ListItem>
          </CustomNavLink>
      }

    </div>
  )
}

export default withRouter(SidebarMenu)