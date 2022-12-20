import { createContext } from "react"

export default createContext({
   isAdminMode: false,
   setIsAdminMode: () => {},
   isTabActive: false,
   setIsTabActive: () => {},
   isPanelVisible: true,
   setIsPanelVisible: () => {},
})
