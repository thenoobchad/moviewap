
import SearchBar from "@/components/search-bar";
import { ScrollView, Text, View } from "react-native";

import { useRouter } from "expo-router";


export default function Index() {
  const router = useRouter()

  return (
    <View className=" flex-1  justify-center items-center">

      <ScrollView className="flex-1"

        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: '100%',
          padding: 10
        }}
      >
        <View className="flex-1 mt-5">

          <SearchBar
            onPress={() => router.push('/search')}
            placeholder="Search for a movie"
          />
        </View>
      </ScrollView>
    </View>
  );
}
