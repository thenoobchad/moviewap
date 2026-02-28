import { Tabs } from "expo-router";
import { Home, Save, Search, User, UserCircle } from "lucide-react";
import { Text, View } from "react-native";

const TabIcon = ({ focused, icon, title, classStyle }: any) => {

    if (focused) {
        return <View style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 12,
            alignItems: 'center',
            
            height: '100%',
            width:'auto',
        }} className="size-full justify-center rounded-full">
            <Text style={{
                color: 'white'
            }} >{icon}</Text>
            <Text style={{
                color: '#fff'
            }} className="text-slate-500">{title}</Text>
        </View>
    }

    return <View style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
       
        
    }} className="size-full justify-center  rounded-full">
        <View>{icon}</View>
        <Text style={{
            color: '#64748b'
        }} className="text-white">{title}</Text>
    </View>
}

export default function _Layout() {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems:'center'
                },
                tabBarStyle: {
                    backgroundColor: '#0f0D23',
                    borderRadius: 50,
                    marginHorizontal: 20,
                    marginBottom: 30,
                    display: 'flex',
                    flexDirection:'row',
                    justifyContent: "center",
                    alignItems:'center',
                    height: 58,
                    position: 'absolute',
                    overflow: 'hidden',
                    borderWidth: 1,
                    borderColor: "#0f0d23",
                    
                }
        }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={<Home color="#64748b"/>} title="Home" />
                    )
                }}
            /> 

            <Tabs.Screen
                name="search"
                options={{
                    title: 'Search',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={<Search color="#64748b"/>} title="Search" />
                    )
                }}
            />

            <Tabs.Screen
                name="saved"
                options={{
                    title: 'Saved',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={<Save color="#64748b"/>} title="Saved" />
                    )
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={<UserCircle color="#64748b"/>} title="Profile" />
                    )
                }}
            />
        </Tabs>
    )
}