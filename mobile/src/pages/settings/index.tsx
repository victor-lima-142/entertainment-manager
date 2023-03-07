import { Card } from '@rneui/themed';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function Settings(): JSX.Element {
    return <ScrollView>
        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((number: number, index: any) => {
            return <Card key={index}>
                <Card.Title>Card Setting Title {number}</Card.Title>
                <Card.Divider />
                <View>
                    <Text>
                        Trying a text of Setting
                    </Text>
                </View>
            </Card>
        })}
    </ScrollView>
}