import { createContext } from "react"

export default createContext({
   isAdminModeActive: false,
   setIsAdminModeActive: () => {},
   isActiveOption: false,
   setIsActiveOption: () => {},
   isPanelVisible: true,
   setIsPanelVisible: () => {},
})
