import { Card } from "@rneui/themed";
import React from "react";
import { View, Text, ScrollView, ActivityIndicator, Image, StyleSheet, StatusBar } from "react-native";
import { TitleRequests } from "../../request";

const Home = (): JSX.Element => {
    const [dataList, setDataList] = React.useState(null);
    const fetchData = React.useCallback(async () => {
        try {
            const titleRequests = new TitleRequests();
            const res = await titleRequests.list();
            if (res?.status === 200) {
                setDataList(res?.data);
                setTimeout(() => console.log(dataList), 2500)
            }
        } catch (error) {
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
        {Object.values(dataList).map((title: any, index: any) => {
            const { name, rate } = title;
            return (<Card containerStyle={{ borderRadius: 10 }} key={index}>
                <Card.Title>Card Title {name}</Card.Title>
                <Card.Divider />
                <View>
                    <Text>
                        Trying a text {rate}
                    </Text>
                </View>
            </Card>);
        })}
    </ScrollView>
}

export default Home;