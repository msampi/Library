export function alert(state = false, action) {
    
    switch (action.type) {
        case 'ALERT_SHOW':
            return  true
        case 'ALERT_HIDE':
            return false
        default:
            return state;
    }
}