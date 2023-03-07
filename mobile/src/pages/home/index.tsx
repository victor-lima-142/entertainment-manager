import { Card } from "@rneui/themed";
import axios from "axios";
import React from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";

export default function Home(): JSX.Element {
    const [dataList, setDataList] = React.useState<any>(null);
    const fetchData = React.useCallback(async () => {
        try {
            const res = await axios.request({
                method: "GET",
                url: "/title/list"
            });
            if (res?.data) {
                setDataList(res?.data);
            }
        } catch (error: any) {
            console.log('erro', error);
        }
    }, []);

    React.useEffect(() => {
        fetchData();
    }, [fetchData]);

    if (!dataList) {
        return <ActivityIndicator />
    }

    return <ScrollView>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((number: number, index: any) => {
            return <Card containerStyle={{ borderRadius: 5 }} key={index}>
                <Card.Title>Card Title {number}</Card.Title>
                <Card.Divider />
                <View>
                    <Text>
                        Trying a text
                    </Text>
                </View>
            </Card>
        })}
    </ScrollView>
}