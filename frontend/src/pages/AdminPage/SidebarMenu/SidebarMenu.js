import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { Grant } from '../../../constants/permissions'
import { useSelector } from 'react-redux'
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined'
import { hasGrant } from '../../../utils/hasGrant'
import { CustomNavLink } from '../../../components/NavLink/NavLink'

export const SidebarMenu = props => {
  const user = useSelector(state => state.users.currentUser)

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