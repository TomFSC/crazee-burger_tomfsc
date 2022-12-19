import { createContext } from "react"

export default createContext({
   isAdminMode: false,
   setIsAdminMode: () => {},
   isActiveTab: false,
   setIsActiveTab: () => {},
   isPanelVisible: true,
   setIsPanelVisible: () => {},
})
