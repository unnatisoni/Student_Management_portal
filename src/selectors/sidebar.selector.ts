import { createSelector } from "reselect";
import { sidebarStateSelector } from "./app.selectors";

export const sidebarSelector = createSelector(
    [sidebarStateSelector],
    (sidebarstate) => {
        return sidebarstate.isOpen;
    }
)