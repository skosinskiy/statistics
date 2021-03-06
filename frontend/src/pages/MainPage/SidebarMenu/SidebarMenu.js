import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { Grant } from '../../../constants/permissions'
import { withRouter } from 'react-router-dom'
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined'
import { hasGrant } from '../../../utils/hasGrant'
import { CustomNavLink } from '../../../components/NavLink/NavLink'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { setChoiceCategoryOfSports } from '../../../store/sportsCategory/operations'

export const SidebarMenu = props => {
  const category = useSelector(state => state.sportsCategory.sportsCategory)
  const user = useSelector(state => state.users.currentUser)
  const dispatch = useDispatch()
  const changeCategoryId = (id) => {
    dispatch(setChoiceCategoryOfSports(id))
  }

  return (
    category ? category.map(sport => {
      return hasGrant(user, Grant.VIEW) &&
      <CustomNavLink to={'/sport/' + sport.title} key={'id_' + sport.id} id={sport.id}>
        <ListItem button alignItems={'center'} onClick={() => changeCategoryId(sport.id)}>
          <ListItemIcon>
            <DescriptionOutlinedIcon/>
          </ListItemIcon>
          <ListItemText primary={sport.title}/>
        </ListItem>
      </CustomNavLink>
    }) : null
  )
}

export default withRouter(SidebarMenu)