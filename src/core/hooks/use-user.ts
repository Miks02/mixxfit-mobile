import { useAuthStore } from "@/src/features/auth/store/auth-store";
import { Gender } from "../types/gender";
import { ImageSourcePropType } from "react-native";

export default function useUser() {
    const user = useAuthStore().user

    const isFemale: boolean = user?.gender === Gender.Female;
    const isMale: boolean = user?.gender === Gender.Male;
    const isOther: boolean = user?.gender === Gender.Other;

    const avatar = (): ImageSourcePropType => {
        if(user?.imagePath) return { uri: user?.imagePath }

        if (isFemale)
            return require('@/assets/images/user_female.png');
        if (isMale)
            return require('@/assets/images/user_male.png');

        return require('@/assets/images/user_other.png');
    }

    const displayName = user?.fullName.trim() ?? user?.userName;

    return {
        avatar,
        displayName,
        isOther,
        isMale,
        isFemale,
        user
    }

}
