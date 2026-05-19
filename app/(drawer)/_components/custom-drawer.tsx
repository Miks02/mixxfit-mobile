import { Colors } from '@/src/constants/colors';
import useAuth from '@/src/features/auth/hooks/use-auth';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import DrawerLink from './drawer-link';

const links = [
    { name: "Dashboard", icon: "chart-area", route: 'dashboard' },
    { name: "Workouts", icon: "dumbbell", route: 'workouts' },
    { name: "Weight Tracking", icon: "weight", route: 'weight-tracking' },
    { name: "Exercise Library", icon: "book-open", route: 'exercise-library' },
    { name: "Profile", icon: "user-alt", route: 'profile' },
    { name: "Settings", icon: "cog", route: 'settings' },
]


const CustomDrawer = (props: DrawerContentComponentProps) => {
    const {navigation, state} = props;
    const { logout } = useAuth();
    const insets = useSafeAreaInsets();
    const tabsState = state.routes.find((r: any) => r.name === '(tabs)')?.state;
    const activeRouteName = tabsState ? tabsState.routes[tabsState.index!].name : 'dashboard';

    return (
        <LinearGradient
        colors={[Colors.yellow[500], Colors.yellow[600]]}
        start={{x: 0, y: 0}}
        end={{x: 0.5, y: 1}}
        className='flex-1 shadow-2xl'>
        <View className='gap-2'>

        <LinearGradient
        colors={[Colors.yellow[500], Colors.yellow[600]]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={{borderBottomLeftRadius: 20, borderBottomRightRadius: 20, paddingTop: insets.top, paddingBottom: insets.bottom}}
        className='shadow-2xl w-full' >
        <View className='items-center'>
        <Image
        source={require('@/assets/images/logo-2.png')}
        style={{width: '50%', height: 130}}
        className='mx-auto'
        transition={300}
        />
        </View>
        </LinearGradient>
        <View className='gap-4 py-2 px-4'>
        {
            links.map((l, index) => {
            const isActive = activeRouteName === l.route;

                return (
                    <DrawerLink
                    key={index}
                    name={l.name}
                    icon={l.icon}
                    isFocused={isActive}
                    onPress={() => navigation.navigate('(tabs)', {screen: l.route})}/>
                )


            })
        }
        <View className=' gap-2'>
            <View className='h-px bg-amber-800'></View>
        <DrawerLink
        color={Colors.danger[800]}
        name={'Sign Out'}
        icon={'door-open'}
        isFocused={false}
        onPress={async () => await logout.mutateAsync()}/>
        </View>
        </View>
        </View>
        </LinearGradient>
    )
}

export default CustomDrawer
