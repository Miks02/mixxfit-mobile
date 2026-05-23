import Toast from "react-native-toast-message"


export default function useToast() {

    const showSuccess = (message: string , duration: number = 4000, header: string = "Success") => {
        Toast.show({type: "success", text1: header, text2: message, visibilityTime: duration})
    }
    const showError = (message: string, duration: number = 4000, header: string = "Error") => {
        Toast.show({type: "error", text1: header, text2: message, visibilityTime: duration})
    }
    const showWarning = (message: string, duration: number = 4000 ,header: string = "Warning") => {
        Toast.show({type: "warning", text1: header, text2: message, visibilityTime: duration})
    }
    const showInfo = (message: string, duration: number = 4000, header: string = "Info") => {
        Toast.show({type: "info", text1: header, text2: message, visibilityTime: duration})
    }

    return {
        showSuccess,
        showError,
        showWarning,
        showInfo
     }

}
