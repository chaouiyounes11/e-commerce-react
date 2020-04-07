import React from 'react'
import MenuItem from '../menu-item/menu-item.component';
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'
import { DirectoryContainer } from './directory.styles'

const Directory = ({ sections }) => (
    <DirectoryContainer>
       {sections.map(({id, ...othersSectionProps}) => (
           <MenuItem key = {id} {...othersSectionProps} />
           ))}
      </DirectoryContainer>
    )
  

const mapStateToProps =  createStructuredSelector({
  sections : selectDirectorySections
})


export default connect(mapStateToProps)(Directory)
