import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

export const WrapperTab = styled(Tab) `
  border-radius: 16px;
  border: 1px solid #ccc;
  padding: 12px;
  margin: 8px;
  
  user-select: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &.is-selected {
    border-bottom: 1px solid transparent;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`

WrapperTab.tabsRole = 'Tab'

export const WrapperTabs = styled(Tabs) `
  font-size: 16px;
  
  width: 100%;
  margin-top: 16px;
`

export const WrapperTabList = styled(TabList) `
  list-style-type: none;
  
  padding: 4px;
  display: flex;
  margin: 0;
`

WrapperTabList.tabsRole = 'TabList'

export const WrapperTabPanel = styled(TabPanel) ` 
  display: none;
  padding: 12px;
  margin-top: -5px; 
  // border: 1px solid #ccc;

  &.is-selected {
    display: block;
  }
`

WrapperTabPanel.tabsRole = 'TabPanel'

export const WrapperList = styled.div `
  display: flex;
  flex-wrap: wrap;
`